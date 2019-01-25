const server = require('./resources/server').server;
let SERVER_PORT = require('./config/config.js').SERVER_PORT;

server(process.env.PORT || SERVER_PORT);