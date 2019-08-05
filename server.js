const app = require('./app')
const port = process.env.PORT_RESTFUL;
const server = require('http').Server(app);
server.listen(port,()=>console.log('service running port :'+port));