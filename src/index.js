/* eslint-disable no-consle */

import express from 'express';

const app = express();

const PORT = process.env.Port || 3000;

app.listen(PORT, err => {
    if(err) {
        throw err;
    } else {
        console.log(`
        Server runnging on port: ${PORT}
        ---
        Running on ${process.env.NODE_ENV}
        ---
        Make something great!!
        `);
    }
});
