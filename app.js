import 'dotenv/config';
import express from 'express';
import routesPets from './routes/pet.js';
import routesUsers from './routes/user.js';
import bodyParser from 'body-parser';
import dbClient from './config/dbClient.js';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/pets', routesPets);
app.use('/user', routesUsers);

try {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Server run port ${PORT}`));
} catch (e) {
  console.log(e);
}

process.on('SIGINT', async => {
  dbClient.disconnect();
  process.exit(0);
});