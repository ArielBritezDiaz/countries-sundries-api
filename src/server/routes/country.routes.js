import { Router } from 'express';

import { getCountry, getCountryFlag } from '../controllers/country.controllers.js';

const router = Router()

router.get('/country', getCountry)

router.get('/country/flag/:id', getCountryFlag)

export default router