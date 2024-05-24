const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const  UserRouter  = require("./Routes/routes");

const app = express();

mongoose.connect('mongodb://localhost:27017/Dating-App');

app.use(express.json());
app.use(cors());
app.use(UserRouter);



const port = 3001;
app.listen(port, ()=>{
    console.log(`Server Connected at ${port}`)
})