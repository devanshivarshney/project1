const http = require('http');
const router = require('./routing.js');

const server = http.createServer((req, res) => {
     router(req, res);
});
server.listen(3000);