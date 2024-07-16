import React from 'react'

import './Phone.css'
import whatsapp_img from '../../img2/watsapp.png'
import phone_call_img from '../../img2/phone_call.png'

function Phone() {
  return (
    <div className="Phone_block">
        <ul className="Phone_example">
            <li className="phone_block_content phone_block_content1">
                <a className='phone_a_color1' href="" aria-label="Spotify" data-social="spotify">
                    <div className="phone_filled"></div>
                    <img src={whatsapp_img} alt="" className="watsapp_img" />
                </a>
                <div className="tooltip tooltip1">Whatsapp</div>
            </li>
            <li className="phone_block_content phone_block_content2">
                {/* <a className='phone_a_color2' href="tel:+375295008098" aria-label="Spotify" data-social="callme"> */}
                <a className='phone_a_color2' href="" aria-label="Spotify" data-social="callme">
                    <div className="phone_filled"></div>
                    <img src={phone_call_img} alt="" className="watsapp_img" />
                </a>
                <div className="tooltip tooltip2">Позвони нам</div>
            </li>
        </ul>  
    </div>
    
)
}

export default Phone

