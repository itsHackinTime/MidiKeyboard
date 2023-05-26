const express = require('express');
const app = express();
const port = 3000;
const  spotify  = require('./routers/spotify.js');
const bodyparser = require('body-parser')
// Define your routes and middleware here
app.use(bodyparser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
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
app.post('/api', spotify.fetchToken, (req, res) => {
  // console.log(res.locals.rh);
  res.status(200).json();
  });
  app.post('/search', spotify.search, (req, res) => {
    // console.log(res.locals.artistsObj.artists);
    // ! make sure to return your responses
    res.status(200).json(res.locals.artistsObj.artists.items);
  });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});