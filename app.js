const http = require('http');

const routes = require('./routes');


console.log(routes.someText);

const server = http.createServer(routes.handler);

// 3000 is the port
server.listen(3000); 