var Hapi = require('hapi');

// Create a server with a host and port
var server = new Hapi.Server();

// Set Connection 
server.connection({ 
    host: 'localhost', // later config prod port
    port: 8000 
});

// Define Route 
server.route([{
  method: 'GET',
  path: '/vote/sms',
  handler: function (request, reply) {
    reply('hello world');
  }
}]);

// Start the server
server.start(function () {
     console.log('Server running at:', server.info.uri);
});