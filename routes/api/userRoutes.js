const router = require('express').Router();
// const bcrypt = require('bcrypt');
const { User }= require('../../models');
const { userLogin } = require('../../controllers/user_controller');

router.use('/login').post(userLogin);

module.exports = router;
