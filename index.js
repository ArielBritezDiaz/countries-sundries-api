import express, { json } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import fs from 'fs';
import bodyParser from 'body-parser';
import compression from 'compression';
import validator from 'validator';

import { PORT, DOMAIN, PROTOCOL } from './config.js';

import countryRouter from './server/routes/country.routes.js';

const app = express()

const validateNameParameter = (req, res, next) => {
    const allowedParams = ["name", "id", "official_name"]

    for (const param in req.query) {
        if (!allowedParams.includes(param)) {
            return res.status(400).json({
                message: `The parameter '${param}' is not found.`
            })
        }
    }

    next()
}

app.use(json())
app.use(compression())
app.use(bodyParser.json())

//Middleware para rutas específicas y que valide que las query en parámetros estén permitidas
app.use(['/country'], validateNameParameter)

app.use(countryRouter)

app.listen(PORT, () => {
    console.log(`Server on port ${PORT} listen`)
})