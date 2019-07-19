const app = require('./app');
require('dotenv').config();
const port = process.env.PORT_RESTFUL;
const server = require('http').Server(app);
server.listen(port);