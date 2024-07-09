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
import Phone from './Phone/Phone';
import Wood from './Wood/Wood';

function App() {

  return (
    <div className="App">
      <Phone/>
      {/* <Navname/>
      <Nav2aboutus/> */}
      <div className="navbar">
        <Navname/>
        <Nawaboutus/>
      </div>
      <Price/>
      <Cdek/>
      <Evro/>
      <Expi/>
      <Call/> 
      <Wood/>

    </div>
  );
}

export default App;
