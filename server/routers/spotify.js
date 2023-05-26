const express = require('express');
const router = express.Router();
require('dotenv').config()

// credentials for spotify please hack my app...actually pls dont

const creds = {
  grant_type: 'client_credentials',
  client_id: process.env.client_id,
  client_secret: process.env.client_secret
}
let token;


 router.fetchToken = async function (req, res, next) {
  const params = new URLSearchParams(creds);
  const url = `https://accounts.spotify.com/api/token`;
  try { 
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type':'application/x-www-form-urlencoded'
      },
      body: params 
    });
    console.log
    const test = await response.json();
    process.env.token = test.access_token;
    return next();
  } catch (error) {
      return next(error);
  }
} 
router.radiohead = async function (req, res, next) {
  const url ='https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb';
  try {
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${process.env.token}`
      },
    });
    res.locals.rh = await response.json();
    return next();
  } catch(error) {
    return next(error);
  }
}
router.search = async function (req, res, next) {
  console.log(req.body);
  const url = 'https://api.spotify.com/v1/search?q=mastodon&type=artist';
  // console.log(process.env.token);
  try {
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${process.env.token}`
      }
    });
    res.locals.artistsObj = await response.json();
    process.env.artist = res.locals.artistsObj.artists.items[0].id
    console.log(process.env.artist)
    return next();
  }catch(error) {
    next(error);
  }
}
router.findRelatedArtists = async function (req, res, next) {
    // console.log(res.locals.artistsObj)
  const url = `https://api.spotify.com/v1/artists/${process.env.artist}/related-artists`;
  try {
    const response = await fetch(url,{
      headers: {
        'Authorization': `Bearer ${process.env.token}`
      }
    });
    res.locals.related =  await response.json()
    return next();
} catch (error) {
    next(error)
  }
}

module.exports = router;