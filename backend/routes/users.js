const express = require("express");
const router = express.Router()
const User = require('../models/userModel')

router.get('/', async (req,res)=>{

    try {
        const users = await User.find();
        res.json(users)
    } catch (error) {
        res.json({message: error})
    }
})

router.post('/add', (req,res)=>{
    const username = req.body.username;
    const newUser = new User({username});

    newUser.save()
        .then(()=>{res.json('User added')})
        .catch(err => res.status(400).json('Error: ' + err));
})


module.exports = router;