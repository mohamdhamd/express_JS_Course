
import express from 'express';

const SimpleRoute = express.Router();



SimpleRoute.get("/", (req, res) => {
    res.send("hello Express ")
})
// about Route
SimpleRoute.get("/about", (req, res) => {
    res.json({ "message": "hello from about" })
})
// Contact route
SimpleRoute.get("/contact", (req, res) => {
    res.json({ "message": "Hello From Contact" })
})


export default SimpleRoute