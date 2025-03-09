
import express from 'express'
import { userLogin, userSignup, userUpdate, userDelete } from '../controllers/userController.js'

const userRouter = express.Router()

userRouter.post("/login", userLogin)

userRouter.post('/signup', userSignup)

// update user
userRouter.put("/updateUser/:id", userUpdate)

// delete user
userRouter.delete("/deleteUser/:id", userDelete)
// multy user paramaters
userRouter.get("/getUsers/:id([0-9]{5})/:name", (req, res) => {
    const { id, name } = req.params
    res.json({
        id,
        name
    })
})

export default userRouter