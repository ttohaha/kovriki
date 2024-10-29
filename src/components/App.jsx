import {React, lazy, Suspense} from 'react'

import './App.css';import Loader from './Loader/Loader';
import TypingText from './DELETE/TypingText';

// import Navname from './Navname/Navname';
// import Nawaboutus from './Nawaboutus/Nawaboutus';
// import Price from './Price/Price';
// import Cdek from './Cdek/Cdek';
// import Evro from './Evro/Evro';
// import Expi from './Expi/Expi';
// import Call from './Call/Call';
// import Phone from './Phone/Phone';
// import Wood from './Wood/Wood';

const Navname = lazy(()=> import('./Navname/Navname'))
const Nawaboutus = lazy(()=> import('./Nawaboutus/Nawaboutus'))
const Nav2aboutus = lazy(()=> import('./Nav2aboutus/Nav2aboutus'))
const Price = lazy(()=> import('./Price/Price'))
const Cdek = lazy(()=> import('./Cdek/Cdek'))
const Evro = lazy(()=> import('./Evro/Evro'))
const Expi = lazy(()=> import('./Expi/Expi'))
const Call = lazy(()=> import('./Call/Call'))
const Phone = lazy(()=> import('./Phone/Phone'))
const Wood = lazy(()=> import('./Wood/Wood'))

function App() {

  // console.log(document.body.classList.add('modal-open'));
  return (
    <div className="App">
      <Suspense fallback={<Loader/>}>
        {/* <Phone/> */}
        {/* <Navname/>
        <Nav2aboutus/> */}
        <Navname/>
        <div className="navbar">
            
            <Nawaboutus/>
        </div>
        <Price/>
        <Cdek/>
        <Evro/>
        <Expi/>
        <Wood/>
        <Call/> 
      </Suspense>
    </div>

    // <div className="vercel" >
    //   <div className="vercel_text">
    //     {/* К сожалению время бесплатного хостинга закончилось &#129402;  */}
    //     <TypingText startText='Hello' endText='Hello world...' deleteSpead='75' typeSpead='225'/>
    //   </div>
    // </div>
  )
}

export default App;
