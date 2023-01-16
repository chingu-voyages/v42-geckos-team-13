import { BrowserRouter, Routes, Route } from 'react-router-dom'

import React from 'react';
import './App.css';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';




function App() {
  return (
    <div>
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
