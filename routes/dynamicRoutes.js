import express from 'express'
import { searchControllers, userController } from '../controllers/routeControllers.js';


const DynamicRouter = express.Router()
 

// Dynamic Routes user
DynamicRouter.get("/user/:username",userController)
// /search?keyword=Ramdan
DynamicRouter.get("/search",searchControllers )

export default DynamicRouter;