const express = require('express');
const dotenv = require('dotenv');

const PORT = 5000;

dotenv.config();

const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID,
      SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;

// instantiate the server
const app = express();

// setup auth endpoints
app.get('auth/login', (req, res) => {
  console.log(req);
});

app.get('auth/callback', (req, res) => {
  console.log(req);
});

// spin up the server
app.listen(PORT, () => {
  console.log(`spotify server is up and running! listening on port ${PORT}`);
});