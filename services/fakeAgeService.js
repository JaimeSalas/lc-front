const Chance = require('chance');
const chance = new Chance();

module.exports.fakeAgeService = () => ({
  age: chance.age(),
  AZ: 'local',
  IP: '127.0.0.1'
});