const express = require('express');

const { UserController } = require('../../controllers');
const { UserMiddlewares } = require('../../middlewares');

const router = express.Router();

// /api/v1/users POST
router.post('/', 
        UserMiddlewares.validateCreateRequest,
        UserController.createUser);



module.exports = router;