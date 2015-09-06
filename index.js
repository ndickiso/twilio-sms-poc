var Hapi = require('hapi');
var routes = require('./routes')(Hapi);

// Create a server with a host and port
var server = new Hapi.Server();

// Set Connection 
server.connection({ 
    host: 'localhost', // later config prod port
    port: process.env.PORT // 8000
});

// Define Route 
server.route([{
  method: 'GET',
  path: '/vote/sms',
  handler: routes.voteSMS // reference method in routes/ 
}]);

// Start the server
server.start(function () {
     console.log('Server running at:', server.info.uri);
});