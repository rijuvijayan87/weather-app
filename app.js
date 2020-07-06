const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geocode('Wellington', (error, data) => {
  console.log('Error', error);
  console.log('Data', data);
});

forecast(-41.28889, 174.77722, (error, data) => {
  console.log('Error:', error);
  console.log('Data:', data);
});
