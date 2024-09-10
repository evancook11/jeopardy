import React from 'react';
import './App.css';
import { Navbar } from './components/navbar/Navbar';

function App() {
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
