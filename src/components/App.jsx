import React from 'react'

import './App.css';
import Navname from './Navname/Navname';
import Nawaboutus from './Nawaboutus/Nawaboutus';
import Price from './Price/Price';

function App() {

  return (
    <div className="App">
      <div className="navbar">
        <Navname/>
        <Nawaboutus/>
      </div>
      <Price/>
    </div>
  );
}

export default App;
