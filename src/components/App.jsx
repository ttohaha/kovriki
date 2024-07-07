import React from 'react'

import './App.css';
import Navname from './Navname/Navname';
import Nawaboutus from './Nawaboutus/Nawaboutus';
import Nav2aboutus from './Nav2aboutus/Nav2aboutus';
import Price from './Price/Price';
import Cdek from './Cdek/Cdek';
import Evro from './Evro/Evro';
import Expi from './Expi/Expi';
import Call from './Call/Call';

function App() {

  return (
    <div className="App">
      {/* <Navname/> */}
      {/* <div className="navbar">
        <Navname/>
        <Nawaboutus/>
      </div> */}
      <Nav2aboutus/>
      <Price/>
      <Cdek/>
      <Evro/>
      <Expi/>
      <Call/>
    </div>
  );
}

export default App;
