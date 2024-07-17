import React from 'react'

import './Navname.css';
import whatsapp_img from '../../img2/watsapp2.png'
import phone_call_img from '../../img2/phone_call2.png'
import phone_mail_img from '../../img2/mail.png'

// function Navname() {
//   return (
//     <div className='navname'><div className="navname_text">Коврики.ру</div></div>       
//   )
// }

function Navname() {
  return (
    <div className='navname'>
      <div className="navname_block_phone navname_block_phone1_done">
        <a className='navname_block_phone1' href="tel:+375295008097">
          <img src={phone_call_img} alt="" className="navname_img" />
          <div className="navname_number">+89637113738</div>
        </a>

        <a className='navname_block_phone2' href="http://wa.me/89660956060" target='blank'>
          <img src={whatsapp_img} alt="" className="navname_img" />
          <div className="navname_number">Написать в Watsapp</div>
        </a>
      </div>



        <a className='navname_block_phone2 navname_block_donetext' href="http://wa.me/89660956060" target='blank'>
          <img src={whatsapp_img} alt="" className="navname_img" />
          <div className="navname_number">Написать в Watsapp</div>
        </a>

      <a className='navname_block_phone3' href="mailto:kovriki2005@mail.ru" target='blank'>
        <img src={phone_mail_img} alt="" className="navname_img" />
        <div className="navname_email">kovriki2005@mail.ru</div>
      </a>

        <a className='navname_block_phone1 navname_block_donetext' href="tel:+375295008097">
          <img src={phone_call_img} alt="" className="navname_img" />
          <div className="navname_number">+89637113738</div>
        </a>
    </div>
  )
}

export default Navname