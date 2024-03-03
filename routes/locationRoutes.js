import express from 'express';
import {getAlllocation} from "../controllers/locationController.js";
//import { getAllLocation, getLocation } from '../controllers/locationController.js';

const router = express.Router();

router.get('/', getAlllocation);
//router.get('/:id', getWorkshop);

export default router;