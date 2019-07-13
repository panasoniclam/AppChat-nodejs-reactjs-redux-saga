require('dotenv').config();

const http = require('http');
const app = require('./app');

const port  = process.env.POST ;
const server = http.createServer(app)
console.log("ahihi",port)
 
server.listen(port);
