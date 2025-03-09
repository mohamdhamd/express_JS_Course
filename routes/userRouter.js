
import express from 'express'
import {userLogin , userSignup} from '../controllers/userController.js'

const userRouter = express.Router()

userRouter.get("/login",userLogin)

userRouter.get('/signup',userSignup)

export  default userRouter