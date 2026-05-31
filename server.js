require("dotenv").config();
const express=  require("express");
const connectDB = require("./config/db");


const app = express();


app.get("/",(req,res) => {
      res.status(200).json({message : "Welcome to Blog Application"})
})

connectDB();
app.listen(process.env.PORT,(req,res)=> {
      console.log(`Server runiing on the port:${process.env.PORT}`)
})

