const Native = require('./../controllers/controller.native');
const express = require('express')
const route = express.Router()
route.get('/get',Native.find)
route.get('/get/:userId',Native.findone)
route.post('/post',Native.create)
module.exports = route