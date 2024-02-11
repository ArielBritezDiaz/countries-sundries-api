import { Router } from 'express';

import { getAllCountries } from '../controllers/allCountries.controllers.js';

const router = Router()

router.get('/countries', getAllCountries)

export default router