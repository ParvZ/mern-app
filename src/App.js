import React from "react";
import NavigationBar from './components/NavigationBar'
import { Routes,Route } from 'react-router-dom';
import ExerciseList from './components/exercises-list'
import EditExercise from './components/edit-exercise'
import CreateExercise from './components/create-exercise'
import CreateUser from './components/create-user'
import Container from '@mui/material/Container';

function App() {
  return (
    <>
      <NavigationBar />
      <Container fixed>
        <Routes>
          <Route path='/Exercises' element={<ExerciseList />}></Route>
          <Route path='edit/:id' element={<EditExercise />}></Route>
          <Route path='Create%20Exercise' element={<CreateExercise />}></Route>
          <Route path='Create%20User' element={<CreateUser />}></Route>
        </Routes>
        </Container>
    </>
    

  );
}

export default App;
