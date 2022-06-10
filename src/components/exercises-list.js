import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useEffect,useState } from 'react';
import axios from "axios";

const ExerciseList =  ()=> {
    const [exercises, setExercises] = useState([])
    useEffect(()=>{
       axios.get('http://localhost:5000/exercises')
            .then((res) => {
                setExercises(res.data)
            })
    },[])
    
    return (  
        <>
        
                {exercises.map((exercise) =>{
                    return(
                        <Card sx={{ minWidth: 275 }}>
                        <CardContent key={exercise.id}>
                            <Typography variant="h5" component="div">
                                {exercise.username}
                            </Typography>
                            <Typography variant="body2">
                                {exercise.description}
                            </Typography>
                            <Typography variant="body2">
                                {exercise.duration}
                            </Typography>
            
                        </CardContent>
                        </Card>
                    )
                })
                }

            
       
        </>
    );
}

export default ExerciseList;