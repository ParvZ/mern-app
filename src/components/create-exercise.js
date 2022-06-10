import React from "react";
import {useNavigate} from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from "axios";
const CreateExercise =  ()=> {
    const { register, handleSubmit,formState: { errors } } = useForm();
    const navigate = useNavigate();
    const onSubmit = (data) =>{
        axios.post('http://localhost:5000/exercises/add', data)
        .then(res => console.log(res.data));
        navigate('/Exercises')
    }
    return (  
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
     
     <input placeholder="Username" {...register("username", { required: true })} />
     {errors.username && <span>This field is required</span>}
     <br/>
     <input placeholder="Description" {...register("description",{ required: true })} />
     {errors.description && <span>This field is required</span>}
     <br/>
     <input placeholder="Duration" {...register("duration",{ required: true })} />
     {errors.duration && <span>This field is required</span>}
     <br/>
     <input placeholder="Date" {...register("date",{ required: true })} />
     {errors.date && <span>This field is required</span>}
     <br/>
     <input type="submit" />
 </form>
        </>
    );
}

export default CreateExercise;