const CrudRepository = require('./crud-repository');
const { User } = require('../models');
const AppError = require('../utils/errors/app-error');
const { StatusCodes } = require('http-status-codes');


class UserRepository extends CrudRepository {
    constructor() {
        super(User);
    }


    async findByEmail(data) {
        try {
            const user = await User.findOne({
                where: {
                    email: data
                }
            });
            return user;
        } catch (error) {
            throw new AppError(['can\'t find the resources'], StatusCodes.NOT_FOUND);
        }
    }
}

module.exports = UserRepository;