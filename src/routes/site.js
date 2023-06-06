import express from 'express';
import siteController from '../app/controllers/SiteControllers.js';

const router = express.Router();

router.get('/', siteController.index);

export default router;
