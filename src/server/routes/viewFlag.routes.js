import { Router } from 'express';

import { getViewFlag } from '../controllers/viewFlag.controller.js';

const router = Router()

router.get('/flag/:idFlag', getViewFlag);

export default router