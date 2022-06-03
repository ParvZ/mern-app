const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config();

const app = express();
const port = 3000;

app.use(express.json())

const uri = process.env.ATLAS_URI;
mongoose.connect( uri , { useNewUrlParser: true, useCreateIndex: true},()=>{
    console.log('MongoDB connected successfully')
})

app.get('/', (req,res)=>{
    res.send('Hi')
})

app.listen(port, () =>{
    console.log(`Server is running at port:  ${port}`);
})
