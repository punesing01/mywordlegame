const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const router = express.Router();

const apiOptions = (method = 'get', headerParams = '') => ({
    headers: {
      'Content-Type': 'application/json',
      headerParams,
    },
    mode: 'cors',
    method,
  });

router.get('/myWordle', (req, res) => {
  const { env } = req.query;

  fetch(`https://api.datamuse.com/words?sp=ro?o?&max=1`, apiOptions())
  .then(response => response.json())
  .then(response => {
      res.send(JSON.stringify(response))
      console.log(JSON.stringify(response));
  })
  .catch(error => res.send(JSON.stringify({ error, title: 'API request failed' })));
});

const policy = `default-src * 'unsafe-inline' 'unsafe-eval'`

router.get('/*', (req, res) => {
  res.setHeader(
    'Strict-Transport-Security',
    'max-age=31536000; includeSubDomains;'
  )
  res.setHeader('Content-Security-Policy', policy)
  res.sendFile(path.join(__dirname, '../build/index.html'))

})

module.exports = router;