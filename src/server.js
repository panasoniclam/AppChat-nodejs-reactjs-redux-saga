const app = require('./app');
const server = require('http').Server(app)
require('dotenv').config()
const port = process.env.PORT;
server.listen(3000,()=>console.log('sevice running port:',port))