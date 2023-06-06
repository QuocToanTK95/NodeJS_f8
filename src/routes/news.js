import express from 'express';
import newController from '../app/controllers/NewsControllers.js';

const router = express.Router();

router.get('/:slug', newController.show);
router.get('/', newController.index);

export default router;
