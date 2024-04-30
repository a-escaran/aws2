import {React, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import axios from 'axios';
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/Registerpage"; 
import MainPage from "./components/Main"; 
import createLoginTable from './components/DynamoDB/LoginTable'; 
// import UserPop from './components/DynamoDB/UserPop';
// import createMusicTable from './components/DynamoDB/MusicTable';
import './App.css';

function App() {
    useEffect(() => {
      createLoginTable(); 
      // UserPop();
      // createMusicTable();
    }, []);

  return (
    <Router>
      <Routes> 
        <Route path='/' element={<LoginPage />} /> 
        <Route path='/register' element={<RegisterPage />} /> 
        <Route path='/main' element={<MainPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;
