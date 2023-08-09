const http = require('http');
const fileSystem = require('fs');
const _ = require('lodash');

const httpCallBack = (request, response) => {
    console.log('request made');
    response.setHeader('Content-type', 'text/html');
    response.end('This is a test reposnse');
}

const serverListenFunction = () => {
    console.log('listening for requests on port 3000');
}

const server = http.createServer(httpCallBack);
server.listen(3000, 'localhost', serverListenFunction)