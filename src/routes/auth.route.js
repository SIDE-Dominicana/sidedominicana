const express = require('express'),
router = express.Router(),
auth = require('../controller/auth.controller')

router.post('/login', auth.login);

router.get('/resetPassword', auth.resetPassword);

module.exports = router