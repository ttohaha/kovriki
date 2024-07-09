import React from 'react'

import './Loader.css'
import Navname from '../Navname/Navname'



function Loader() {
  return (
    <>
        <Navname/>
        <div className="loader_main">
        <span class="loader"></span>

        </div>
    </>
  )
}

export default Loader