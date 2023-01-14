import React from 'react';
import './App.css';
import LoginPage from '../Pages/LoginPage';
import SignupPage from '../Pages/SignupPage';
import Chats from '../components/chat';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AuthProvider } from "../contexts/authContext";




function App() {
  /* jshint ignore: start */
  return (
    <div>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path='/' element={<LoginPage />}></Route>
            <Route path='/register' element={<SignupPage />}></Route>
            <Route path='/chats' element={<Chats />}></Route>
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
  /* jshint ignore: end */
}

export default App;
