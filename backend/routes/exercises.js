const express = require('express')
const router = express.Router()
const Exercise = require('../models/exercise.model')

// getting all exercises
router.get('/', (req,res)=>{
    Exercise.find()
        .then(exercises=> res.json(exercises))
        .catch(err => res.status(400).json('Error: ' + err));
})

// getting specific exercise details
router.get('/:id', (req,res)=>{
    Exercise.findById(req.params.id)
        .then(exercises=> res.json(exercises))
        .catch(err => res.status(400).json('Error: ' + err));
})

// deleting specific exercise details
router.delete('/:id', (req,res) =>{
    Exercise.findByIdAndDelete(req.params.id)
        .then(() => res.json('User deletd'))
        .catch(err => res.json(err));

})

// Add exercise details
router.post('/add', (req,res)=>{
    const username = req.body.username;
    const description = req.body.description;
    const duration = req.body.duration;
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({
        username,
        description,
        duration,
        date
    });

    newExercise.save()
        .then(()=>{res.json('Exercise added')})
        .catch(err => res.status(400).json('Error: ' + err));
})

// Update the specific exercise
router.post('/update/:id', (req,res)=>{
    Exercise.findById(req.params.id)
        .then( exercise => {
            exercise.username = req.body.username
            exercise.description = req.body.description
            exercise.duration = Number(req.body.duration)
            exercise.date = Date.parse(req.body.date)

            exercise.save()
                .then(()=>{res.json('Exercise Updated')})
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err))
    
})
module.exports = router;