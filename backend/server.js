const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
var cors = require('cors');
require('dotenv').config();

const app = express();
const port = 5000;

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());

app.get('/', (req,res)=>{
    res.send('Hi, from mern app')
})

const exercisesRouter = require('./routes/exercises')
const usersRouter = require('./routes/users')

app.use('/exercises', exercisesRouter)
app.use('/users', usersRouter)

const uri = process.env.ATLAS_URI;
mongoose.connect( uri , { useNewUrlParser: true},()=>{
    console.log('MongoDB connected successfully')
})

app.listen(port, () =>{
    console.log(`Server is running at port:  ${port}`);
})
