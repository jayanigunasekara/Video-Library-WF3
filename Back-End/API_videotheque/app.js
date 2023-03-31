const express = require('express');
const path = require('path');

const movieRoutes = require('./routes/movie');

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(express.static('images'));

app.use('/videos', express.static(path.join(__dirname, 'videos')));
app.use(express.static('videos'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/api/movies', movieRoutes);

module.exports = app;
