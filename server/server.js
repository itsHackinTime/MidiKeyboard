const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const  spotify  = require('./routers/spotify.js');
// Define your routes and middleware here

// Example route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});
app.post('/', spotify.fetchToken, spotify.radiohead, (req, res) => {
  console.log(res.locals.rh)
  res.status(200).json(res.locals.rh);
  });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});