import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
const CreateUser =  ()=> {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data)=>{
        axios.post('http://localhost:5000/users/add', data)
        .then(res => console.log(res.data))
    }
    return (  
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="Type Username" {...register("username", { required: true })} />
            {errors.username && <span>This field is required</span>}
            
            <input defaultValue="Add User" type="submit" />
        </form>
        </>
    );
}

export default CreateUser;