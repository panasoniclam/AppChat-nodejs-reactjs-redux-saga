const express = require('express');
const route = express.Router();
const LamNN_controller = require('../controllers/controller.lamnn')
route.get('/findall',LamNN_controller.findAll)
route.post('/register',LamNN_controller.register)
route.post('/login',LamNN_controller.login)
module.exports = route;