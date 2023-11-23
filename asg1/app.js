const http = require('http');

const users = require('./users');

const server = http.createServer(users.handler);

server.listen(3000);