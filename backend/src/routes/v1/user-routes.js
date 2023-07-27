const express = require('express');

const { UserController } = require('../../controllers');
const { UserMiddlewares } = require('../../middlewares');

const router = express.Router();

// /api/v1/users POST
router.post('/signup', 
        UserMiddlewares.validateCreateRequest,
        UserController.signUp);

router.post('/signin', 
        UserMiddlewares.validateCreateRequest,
        UserController.signIn);


module.exports = router;