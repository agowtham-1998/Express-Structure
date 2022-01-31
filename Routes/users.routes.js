const express = require('express');
const checkAuth = require('../Middleware/checkAuth.middleware');
const userControllers = require('../Controllers/user.controllers');
const router = express.Router();

router.post('/signup', userControllers.userRegister);
router.post('/login', userControllers.userLogin);
router.get('/me', checkAuth, userControllers.getMe);

module.exports = router