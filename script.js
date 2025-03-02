const jobroute = require("./routes/job.route")
const express = require('express');
const mongoose = require('mongoose')




const PORT = process.env.PORT || 2000;
const app = express();

mongoose
.connect("mongodb://localhost:27017/job-db")
.then(()=>console.log("DB Connected Successfully to the Backend")) 
.catch((err)=> console.log(err)) 


//middlewares
app.use(express.json())

// api
app.use("/api/v1/job",jobroute)


app.listen(PORT, ()=>console.log(`Server is up and running at port ${PORT}`))