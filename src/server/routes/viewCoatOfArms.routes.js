import { Router } from 'express';

import { getViewCoatOfArms } from '../controllers/viewCoatOfArms.controller.js';

const router = Router()

router.get('/coat-of-arms/:idCoatOfArms', getViewCoatOfArms);

export default router