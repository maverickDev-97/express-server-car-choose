import { Router } from 'express'
import CarsController from '../controllers/CarsController.js';

const router = Router();

router.get('/cars', CarsController.getAll)

router.post('/cars', CarsController.create)

export default router;