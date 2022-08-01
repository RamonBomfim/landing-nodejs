import { Router } from 'express';

import * as HomeController from '../controllers/homeController';
import * as ConfirmationController from '../controllers/confirmationController';

const router = Router();

router.get('/', HomeController.home);

router.get('/confirmacao', ConfirmationController.confirmationPage);
router.post('/confirmacao', ConfirmationController.confirmation);

export default router;