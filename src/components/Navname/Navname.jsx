import React from 'react'

import './Navname.css';
import whatsapp_img from '../../img2/watsapp.png'
import phone_call_img from '../../img2/phone_call.png'

function Navname() {
  return (
    <div className='navname'><div className="navname_text">Коврики.ру</div></div>
  )
}

// function Navname() {
//   return (
//     <div className='navname'>
//       <div className="navname_block_phone">
//         <div className="navname_block_phone1">
//           <img src={phone_call_img} alt="" className="navname_img" />
//           <div className="navname_number">89637113738</div>
//         </div>
//         <div className="navname_block_phone1">
//           <img src={whatsapp_img} alt="" className="navname_img" />
//           <div className="navname_number">89660956060</div>
//         </div>
//       </div>

//       <div className="navname_email">
//       <img src={phone_call_img} alt="" className="navname_img" />
//       <div className="navname_email">kovriki2005@mail.ru</div>
//       </div>
//     </div>
//   )
// }

export default Navname