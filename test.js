//this is a test flight nneds to have a io socket and stuff

var arDrone = require('ar-drone');
var client = arDrone.createClient();

client.takeoff();

client
  .after(5000, function() {
    this.clockwise(0.5);
  })
  .after(1000, function() {
    this.stop();
    this.land();
  });
