const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const  spotify  = require('./routers/spotify.js');

// Define your routes and middleware here

// Example route
app.get('/api', spotify.findRelatedArtists, (req, res) => {
  // ! make sure to return your responses
  res.status(200).json(res.locals.related);
});
app.get('/search', spotify.search, (req, res) => {
  // console.log(res.locals.artistsObj.artists);
  // ! make sure to return your responses
  res.status(200).json(res.locals.artistsObj.artists.items);
});
app.post('/api', spotify.fetchToken, async (req, res) => {
  // console.log(res.locals.rh);
  res.status(200).json();
  });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});