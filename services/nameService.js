const http = require('http');
const { httpGetPromise } = require('./httpGetPromise');
module.exports.getName = httpGetPromise(process.env.NAME_SERVICE_URL);