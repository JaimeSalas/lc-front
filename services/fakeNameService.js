const Chance = require('chance');
const chance = new Chance();

module.exports.fakeNameService = () => ({
  name: chance.name(),
  AZ: 'local',
  IP: '127.0.0.1'
});