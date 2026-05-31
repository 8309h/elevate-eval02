require("dotenv").config();
const express=  require("express");
const connectDB = require("./config/db");
const logger =  require("./middleware/loggerMiddleware");
const errorHandler = require("./middleware/errorMiddleware");

const authRoutes = require("./routes/authRoutes");
const postRoutes =  require("./routes/postRoutes");

const app = express();
connectDB();

app.use(express.json());
app.use(logger);

app.get("/",(req,res) => {
      res.status(200).json({message : "Welcome to Blog Application"})
})

app.use("/api/auth",authRoutes);
app.use("api/post",postRoutes)


app.use(errorHandler)

app.listen(process.env.PORT,(req,res)=> {
      console.log(`Server runiing on the port:${process.env.PORT}`)
})

