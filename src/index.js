/* eslint-disable no-consle */

import express from 'express';

import constants from './config/constants';
import './config/database';

import middlewaresConfig from './config/middlewares';
import apiRoutes from './modules';

const app = express();

middlewaresConfig(app);

app.get('/', (req, res) => {
  res.send('Set up complete!');
});

apiRoutes(app);

app.listen(constants.PORT, err => {
  if (err) {
    throw err;
  } else {
    console.log(`
        Server runnging on port: ${constants.PORT}
        ---
        Running on ${process.env.NODE_ENV}
        ---
        Make something great!!!
        `);
  }
});
