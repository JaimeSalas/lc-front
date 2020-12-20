const http = require('http');
const { httpGetPromise } = require('./httpGetPromise');
module.exports.getAge = httpGetPromise(process.env.AGE_SERVICE_URL);