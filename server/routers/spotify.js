const express = require('express');
const router = express.Router();
const path = require('path');

// credentials for spotify please hack my app...actually pls dont

const creds = {
  grant_type: 'client_credentials',
  client_id: 'baf9163f11444b65884719488960d9f6',
  client_secret:'5488770bbdea4679af5016512b5b939f'
}



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
    res.locals.token = await response.json();
    return next();
  } catch (error) {
      return next(error);
  }
} 
router.radiohead = async function (req, res, next) {
  const url ='https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb'
  try {
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${res.locals.token.access_token}`
      },
    });
    res.locals.rh = await response.json();
    return next()
  } catch(error) {
    return next(error)
  }
}

module.exports = router;