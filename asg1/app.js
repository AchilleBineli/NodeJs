const http = require('http');

// import file containing the request handler
const routes = require('./user');

const server = http.createServer(routes.handler);

// listen on port 3000
server.listen(3000);