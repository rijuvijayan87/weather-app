const request = require('request');

const url =
  'http://api.weatherstack.com/current?access_key=8b9fac9544f5f0f201c0ecef44bacfa9&query=Wellington';

request({ url: url }, (error, response, body) => {
  const data = JSON.parse(response.body);
  console.log(data);
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body);
});
