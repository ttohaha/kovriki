import React from 'react'

import Navname from '../Navname/Navname';
import Nawaboutus from '../Nawaboutus/Nawaboutus';
import Price from '../Price/Price';
import Cdek from '../Cdek/Cdek';
import Evro from '../Evro/Evro';
import Expi from '../Expi/Expi';
import Call from '../Call/Call';
import Phone from '../Phone/Phone';
import Wood from '../Wood/Wood';

function Homepage() {
  return (
<>
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
</>
  )
}

export default Homepage