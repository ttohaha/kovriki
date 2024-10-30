import {useEffect, useState} from 'react'

import './Navname.css';
import whatsapp_img from '../../img2/watsapp2.png'
import phone_call_img from '../../img2/phone_call2.png'
import phone_mail_img from '../../img2/mail.png'

// function Navname() {
//   return (
//     <div className='navname'><div className="navname_text">Коврики.ру</div></div>       
//   )
// }




// const header = document.querySelector('header');
// let lastScroll = 0;

// window.addEventListener("scroll", () => {
//   const currentScroll = window.pageYOffset;
//   if (currentScroll <= 0) {
//     if (header.classList.contains('_header-scroll')) { 
//       header.classList.remove('_header-scroll');
//     }
//     return;
//   }

//   if (currentScroll > lastScroll) {
//     if (!header.classList.contains('_header-scroll')) {
//       header.classList.add('_header-scroll');
//     }
//   } else if (currentScroll < lastScroll) {
//     if (header.classList.contains('_header-scroll')) {
//       header.classList.remove('_header-scroll');
//     }
//   }
//   lastScroll = currentScroll;
// });

function Navname() {
  // const [position, setPosition] = useState(window.pageYOffset)
  // const [visible, setVisible] = useState(true) 
  // const [visiblelast, setVisiblelast] = useState(window.pageYOffset) 
  // const [visiblefirst, setVisiblefirst] = useState(-20) 
  // useEffect(()=> {
  //     const handleScroll = () => {
  //        let moving = window.pageYOffset

  //        if(window.scrollY>100 && position > moving){
  //         setVisiblefirst(moving)
  //         setVisible(visiblelast-moving>=150 ? true : false)
  //        }else{
  //         setVisible(false)
  //         setVisiblelast(moving)

  //         if(moving-visiblefirst<=20 && visible===true){
  //           setVisible(true)
  //         }else{
  //           setVisible(false)
  //         }

  //        }
         
  //        setPosition(moving)
  //     }
  //     window.addEventListener("scroll", handleScroll);
  //     return(() => {
  //        window.removeEventListener("scroll", handleScroll);
  //     })
  // })

  // let cls = ''
  // if(window.innerWidth<=840){
  //   cls = visible ? "0px" : "-150px";
  // }else{
  //   cls = visible ? "0px" : "-100px";
  // }


  return (
    // <div className='navname' style={{top:`${cls}`}}>
    <div className='navname'>
      <div className="navname_block_phone navname_block_phone1_done">
        <a className='navname_block_phone1' href="tel:+79637113738">
          <img src={phone_call_img} alt="" className="navname_img" />
          <div className="navname_number">+79637113738</div>
        </a>

        <a className='navname_block_phone2' href="http://wa.me/79660956060" target='blank'>
          <img src={whatsapp_img} alt="" className="navname_img" />
          <div className="navname_number">Написать в Watsapp</div>
        </a>
      </div>



        <a className='navname_block_phone2 navname_block_donetext' href="http://wa.me/79660956060" target='blank'>
          <img src={whatsapp_img} alt="" className="navname_img" />
          <div className="navname_number">Написать в Watsapp</div>
        </a>

      <a className='navname_block_phone3' href="mailto:kovriki2005@mail.ru" target='blank'>
        <img src={phone_mail_img} alt="" className="navname_img" />
        <div className="navname_email">kovriki2005@mail.ru</div>
      </a>

        <a className='navname_block_phone1 navname_block_donetext' href="tel:+79637113738">
          <img src={phone_call_img} alt="" className="navname_img" />
          <div className="navname_number">+79637113738</div>
        </a>
    </div>
  )
}

export default Navname