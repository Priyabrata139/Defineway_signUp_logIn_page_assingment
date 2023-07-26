const {StatusCodes} = require('http-status-codes');

const { UserRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error');
const bcrypt = require('bcrypt');

const userRepository = new UserRepository();

async function createUser(data) {
    try {
        const plainPassword = data.password;

        let newData;
        
        await bcrypt.hash(plainPassword, 9).then(function(hash) {
            // Store hash in your password DB.
            console.log(hash);
            data.password = hash;
            newData = {'email': data.email, 'password': hash};
            // console.log(newData, 19);
        });
        // console.log(newData, 21);
        const user = await userRepository.create(newData);
        return user;
    } catch(error) {
        console.log(error);
        if(error.name == 'SequelizeValidationError' || error.name == 'SequelizeUniqueConstraintError') {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new User object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}



module.exports = {
    createUser
}