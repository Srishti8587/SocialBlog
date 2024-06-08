const express=require('express')
const cors=require('cors')
const morgan=require('morgan')
const colors=require('colors')
const dotenv=require('dotenv')
const connectDB = require('./config/db')
const path = require("path");


//env config // if another file then add path name inside bracket
dotenv.config();

// user router
const userRoutes=require('./routes/userRoutes');
const blogRoutes=require('./routes/blogRoutes');

//mongodb connection 
connectDB();

// rest object
const app=express()

// basic middlewares
app.use(cors())
app.use(express.json()) // to use data in json format -
app.use(morgan('dev')) // to show api on console->  Morgan is a Node.js middleware to log HTTP requests.
//  Monitoring and reading logs can help you better understand how your application behaves.custom morgan msgs can also be logged.


// routes
app.use("/api/v1/user",userRoutes);
app.use("/api/v1/blog",blogRoutes);


app.get("/", (req, res) => {
app.use(express.static(path.resolve(__dirname, "client", "build")));
res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});


//listen 
const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server Running on ${process.env.DEV_MODE} MODE on portn number ${PORT}`.bgCyan.white);
})
