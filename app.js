import express from 'express'
import dotenv from 'dotenv'
import DynamicRouter from './routes/dynamicRoutes.js';
import SimpleRoute from './routes/simpleRoutes.js';
import userRouter from './routes/userRouter.js';
import catchInvalidRoutes from './routes/catchInvalidRoutes.js';
dotenv.config();


const app = express();
// middleware
app.use(express.json());



app.use("/simRoute",SimpleRoute)
app.use("/dyRoute",DynamicRouter)
app.use("/user",userRouter)
app.use("",catchInvalidRoutes)


const port = process.env.PORT
app.listen(port,()=>{
    console.log(`hello from Express On port ${port}`)
})
