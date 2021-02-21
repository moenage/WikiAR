import express from 'express';

import { getInfoCards, createInfoCard } from '../controllers/infoCards.js';

const router = express.Router();

router.get('/', getInfoCards);
router.post('/', createInfoCard);

export default router;