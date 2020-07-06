const request = require('request');

const forecast = (lat, long, callback) => {
  const urlWeatherStack =
    'http://api.weatherstack.com/current?access_key=8b9fac9544f5f0f201c0ecef44bacfa9&query=' +
    lat +
    ',' +
    long +
    '&units=m';
  console.log('URL: ', urlWeatherStack);
  request({ url: urlWeatherStack, json: true }, (error, response) => {
    if (error) {
      callback(
        'Unable to connect to weather service. Please try again later!',
        undefined
      );
    } else if (response.body.error) {
      callback('Invalid location. Try again with a valid one', undefined);
    } else {
      callback(undefined, {
        location:
          response.body.location.name + ', ' + response.body.location.country,
        weatherCondition: response.body.current.weather_descriptions[0],
        chanceOfRain: response.body.current.precip,
        temperature: response.body.current.feelslike,
        localTime: response.body.location.localtime,
      });
    }
  });
};

module.exports = forecast;
