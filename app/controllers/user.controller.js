const axios = require("axios");
const https = require('https');

const agent = new https.Agent({
  keepAlive: true,
});
exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.getStockData = (req, res) => {
  const secretKey = 'MSrIDco7b2pAUe3t39WZgax110d2kVefKD7dhbuc';
  const apiKey = 'CKP3MQZGSRKBGC1LP688';

  const username = 'CKP3MQZGSRKBGC1LP688';
  const password = 'MSrIDco7b2pAUe3t39WZgax110d2kVefKD7dhbuc';
  
  // Encoding username and password in base64
  const basicAuthCredentials = Buffer.from(`${username}:${password}`, 'utf-8').toString('base64');
  const headers = {

    'Authorization': `Basic ${basicAuthCredentials}`

  };
  axios.get('https://broker-api.sandbox.alpaca.markets/v1/assets', { headers })
  .then(response => {    
    return res.status(200).send(response.data);
  })
  .catch(error => {
    console.error('Error fetching stock data:', error);
    return res.status(500).send('Error fetching stock data');
  });
  // res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};
