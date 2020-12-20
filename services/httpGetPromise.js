const http = require('http');

module.exports.httpGetPromise = (url) => () => new Promise((resolve, reject) => {
  let responseData = '';
  http.get(url, (res) => {
    res.on('data', (chunk) => {
      responseData += chunk;
    });

    res.on('end', () => resolve(JSON.parse(responseData)));

    res.on('error', reject);
  });
});