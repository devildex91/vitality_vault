import './App.css';
import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Login from './routes/login'
import Home from './routes/home'

export default function App() {
  

  return (

    <Router>
      <Routes>
        <Route path = '/login' element={<Login />} />
        <Route path = '/home' element={<Home />} />
      </Routes>
    </Router>
    
    
     
     )}