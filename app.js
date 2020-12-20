const path = require('path');
const express = require('express');
const services = require('./services');
require('dotenv').config();

const app = express();
const router = express.Router();
const { ageService, nameService } = services;

app.disable('view cache');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use('/health', require('express-healthcheck')());

router.get('/', async (req, res) => {
  const ageResponse = await ageService();
  const nameResponse = await nameService();

  console.log(ageResponse);
  console.log(nameResponse);

  const nameContent = `Hi my name is ${nameResponse.name}, and I'm comming from ${nameResponse.IP} that is on ${nameResponse.AZ}`;
  const ageContent = `My age is ${ageResponse.age}, and I'm comming from ${ageResponse.IP} that is on ${ageResponse.AZ}`;

  res.render('index', { nameContent, ageContent });
});

app.use('/', router);
app.listen(3000, () => {
  console.log('Running on port 3000');
});