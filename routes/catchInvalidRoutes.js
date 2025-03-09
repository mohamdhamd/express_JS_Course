import express from 'express'
import { catchInvalidControllers } from '../controllers/catchInvalidControllers.js';

const catchInvalidRoutes = express.Router();
catchInvalidRoutes.get('*', catchInvalidControllers)
export default catchInvalidRoutes;