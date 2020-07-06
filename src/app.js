const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();
// Define path for express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'Riju Vijayan',
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me',
    name: 'Riju Vijayan',
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    helpText: 'This is some useful text',
    title: 'Help',
    name: 'Riju Vijayan',
  });
});

app.get('/weather', (req, res) => {
  if (!req.query.location) {
    return res.send({
      error: 'You must enter a location',
    });
  }

  res.send({
    location: req.query.location,
  });
});

app.get('/products', (req, res) => {
  res.send({
    products: [],
  });
});

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Riju Vijayan',
    errorMessage: 'Help article not found.',
  });
});

app.get('*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Riju Vijayan',
    errorMessage: 'Page not found.',
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
