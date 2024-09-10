import React, { useEffect, useState } from 'react';
import './App.css';
import { Navbar } from './components/navbar/Navbar';

function App() {

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => console.log(data.message));
  }, []);

  return (
    <div className='app'>
      <Navbar></Navbar>
      <div className='d-flex justify-content-around align-items-center bg-info flex-grow-1'>
        <h1 className='text-white title'>Welcome to Jeopardy!</h1>
      </div>
    </div>
  );
}

export default App;
