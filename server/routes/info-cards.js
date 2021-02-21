import express from 'express';

import { getInfoCards } from '../controllers/info-cards.js';

const router = express.Router();

router.get('/', getInfoCards);

export default router;