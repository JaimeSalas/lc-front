require('dotenv').config();
const { fakeAgeService } = require('./fakeAgeService');
const { getAge } = require('./ageService');
const { fakeNameService } = require('./fakeNameService');
const { getName } = require('./nameService');

module.exports = {
  ageService: (process.env.NODE_ENV === 'production') ? getAge : fakeAgeService,
  nameService: ((process.env.NODE_ENV === 'production')) ? getName : fakeNameService,
};