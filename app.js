const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv[2];

geocode(address, (error, { latitude, longitude, location }) => {
  if (error) {
    return console.log(error);
  }
  forecast(latitude, longitude, (error, data) => {
    if (error) {
      return console.log(error);
    }
    console.log('Location :', location);
    console.log('Data:', data);
  });
});

// const product = {
//   label: 'test label',
//   price: 3,
//   stock: 201,
//   salePrice: 33,
//   rating: 4.2,
// };

// const { label, price } = product;
// console.log(label, price);

// const transaction = (type, { label, price, stock }) => {
//   console.log(type, label, price, stock);
// };

// transaction('order', product);
