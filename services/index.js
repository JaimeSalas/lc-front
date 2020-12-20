require('dotenv').config();
const { getAge } = require('./ageService');
const { getName } = require('./nameService');

let _fakeAgeService;
let _fakeNameService;

if (process.env.NODE_ENV !== 'production') {
  console.log('not supposed to show', process.env.NODE_ENV);
  const { fakeAgeService } = require('./fakeAgeService');
  const { fakeNameService } = require('./fakeNameService');
  _fakeAgeService = fakeAgeService;
  _fakeNameService = fakeNameService;
}

module.exports = {
  ageService: (process.env.NODE_ENV === 'production') ? getAge : _fakeAgeService,
  nameService: ((process.env.NODE_ENV === 'production')) ? getName : _fakeNameService,
};