import React from 'react';
import './LoginPage.css';
import { useNavigate } from "react-router-dom";
import firebase from 'firebase/compat/app';
import { auth } from "../components/firebase";

const LoginPage = () => {


   const navigate = useNavigate();

   const handleClick = () => {
      navigate("/register");
   };

   /* jshint ignore: start */
   return (
      <div className="flex justify-center items-center h-screen bg-indigo-600 flex-col">
         <div>
            <h1 className='text-3xl block text-center font-semibold text-white mb-5'>GECKO 13 CHAT APP</h1>
         </div>
         <div className="w-96 p-6 shadow-lg bg-white rounded-md">
            <h1 className='text-3xl block text-center font-semibold'><i className="fa-solid fa-right-to-bracket"></i>&nbsp;Login</h1>
            <hr className='mt-3' />
            <div className="mt-3">
               <label for="username" className='block text-base mb-2'>Username</label>
               <input type="text" id="username" className="border w-full text-base px-2 py-1 focus:outline-none 
       focus:ring-0 focus:border-gray-600" placeholder='Enter username' />
            </div>
            <div className="mt-3">
               <label for="password" className='block text-base mb-2'>Password</label>
               <input type="password" id="password" className="border w-full text-base px-2 py-1 focus:outline-none 
       focus:ring-0 focus:border-gray-600" placeholder='Enter password' />
            </div>
            <div className='mt-5'>

               <button onClick={() => auth.signInWithEmailAndPassword(new firebase.auth.EmailAuthProvider())} type="submit" className='border-2 border-indigo-700 bg-indigo-700 text-white py-1
          w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold'>Login</button>

            </div>
            <div className='mt-5'>
               <button onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())} type="submit" className='border-2 border-indigo-700 bg-indigo-700 text-white py-1
          w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold'>Login with Google</button>

            </div>
         </div>

         <div>
            <p className='text-white text-center mt-3'>Don't have an account? <button onClick={handleClick} className='text-white-700 font-semibold'>Sign up</button></p>
         </div>
      </div>
   )
   /* jshint ignore: end */
};

export default LoginPage;