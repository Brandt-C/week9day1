import axios from 'axios';

import BackgroundVideo from './components/BackgroundVideo';
import { useState, useEffect } from 'react';
import LoginForm from './components/LoginForm';
import Header from './components/Header';


export default function App() { 


  const fetchAPI = async () =>{
    const response = await axios.get("http://127.0.0.1:5000/api/users");
    console.log(response.data.users);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <>
        In the beginning... 
        <BackgroundVideo />
        <Header/>
        <LoginForm />
    </>
  )
}

