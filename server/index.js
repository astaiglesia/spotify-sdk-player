const express = require('express');
const dotenv = require('dotenv');
const axios = require('axios');
const { request } = require('express');

const PORT = 5000;

// can / should this be a variable assignment
global.access_token = '';

dotenv.config();

const spotify_client_id = process.env.SPOTIFY_CLIENT_ID,
      spotify_client_secret = process.env.SPOTIFY_CLIENT_SECRET;

// instantiate the server
const app = express();

// generates a random string to protect against attacks such as cross-site request forgery
const generateRandomString = length => {
  const text = '',
        possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
   text += possible.charAt(Math.floor(Math.random() * possible.length)) ;
  }

  console.log(text);
  return text;
} 

// --- setup auth endpoints
// redirects to spotify login to allow user permission
app.get('auth/login', (req, res) => {
  console.log('login accessed');

  const scope = "streaming \ user-read-email \ user-read-private";

  const state = generateRandomString(16);

  const auth_query_parameters = new URLSearchParams({
    response_type: "code",
    client_id: spotify_client_id,
    scope: scope, 
    redirect_uri: "http://localhost:1234/auth/callback",
    state: state
  });

  res.redirect(`https://accounts.spotify.com/authorize/?${auth_query_parameters.toString()}`);
});



// handles redirects back from Spotify
// ## convert to axios from request (deprecated)
app.get('auth/callback', (req, res) => {
  const code = req.query.code;

  const authOptions = {
    url: 'https://accounts.spotify.om/api/token',

    for : {
      code: code,
      redirect_uri: "http://localhost:1234/auth/callback",
      grant_type: 'authorization_code'
    },
    
    headers: {
      'Authorization': `Basic ${Buffer.from(`${spotify_client_id}:${spotify_client_secret}`).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded' 
    },
    
    json: true
  }

  request.post(authOptions, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      access_token = body.access_token;
      res.redirect('/');
    }
  })
});

// returns the access token in json format
app.get('/auth/token', (req, res) => {
  res.json({ access_token: access_token})
})


// spin up the server
app.listen(PORT, () => {
  console.log(`spotify server is up and running! listening on port ${PORT}`);
});
