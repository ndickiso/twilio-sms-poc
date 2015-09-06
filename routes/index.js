var twilio = require('twilio')
  , Hapi;

// Accept reference to Hapi
module.exports = function(hapi) {
  Hapi = hapi
  return exports;
};
 
// @/vote/sms 
var voteSMS = exports.voteSMS = function(request, reply) {
  var resp = new twilio.TwimlResponse();
  resp.message('Thanks for voting!');
  reply(resp.toString()).type('text/xml');
  //reply(resp.children[0].text);
};