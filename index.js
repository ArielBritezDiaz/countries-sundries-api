import express, { json } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import fs from 'fs';
import bodyParser from 'body-parser';
import compression from 'compression';
import validator from 'validator';

import { PORT, DOMAIN, PROTOCOL } from './config.js';

import allCountriesRoutes from './src/server/routes/allCountries.routes.js';
import viewFlag from './src/server/routes/viewFlag.routes.js';

const app = express()

app.use(cors())
app.use(express.json());
app.use(bodyParser.json());

app.use(allCountriesRoutes)
app.use(viewFlag)

app.listen(PORT, () => {
    console.log(`Server on port ${PORT} listen`)
})