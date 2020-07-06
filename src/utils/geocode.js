const request = require('request');

const geocode = (location, callback) => {
  const urlMapbox =
    'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
    encodeURIComponent(location) +
    '.json?access_token=pk.eyJ1IjoicmlqdXZpamF5YW4iLCJhIjoiY2p0Zm1nYnJtMGNybzQzbWc2aDBqbXhhMSJ9.bv4NGr76mhGOY9Du0LxLdA&limit=1';

  request({ url: urlMapbox, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to location service', undefined);
    } else if (response.body.features.length === 0) {
      callback('Invalid location. Try again with a valid one', undefined);
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[1],
        longitude: response.body.features[0].center[0],
        place: response.body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
