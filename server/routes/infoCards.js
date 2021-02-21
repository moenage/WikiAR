import express from 'express';

import { getInfoCards } from '../controllers/infoCards.js';

const router = express.Router();

router.get('/', getInfoCards);

export default router;