import React, {useEffect} from 'react'

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';

import Fancybox from '../Fancybox/Fancybox';

import img_bg_expi1 from '../../img2/bg_expi.JPG'
// import img_bg_expi2 from '../../img/bg_expi2.JPG'
import img_expo_img1 from '../../img2/expo_img3.png'
import img_expo_img2 from '../../img2/expo_img4.png'
import img_expi_picture from '../../img2/evro_pictire.png'

import img_cover_info1 from '../../img2/cover_info1.png'
import img_cover_info1_back from '../../img2/cover_info1_back.png'

import './Expi.css'

function Expi() {
  gsap.registerPlugin(useGSAP,ScrollTrigger);

  // useEffect(()=>{
  //   gsap.fromTo('.evro_img_car', {opacity:0,y:+50},{
  //     y:0,
  //     opacity:1,
  //     scrollTrigger:{
  //       trigger:'.podlozka_evro',
  //       start:'top center',
  //       end:'top center',
  //       scrub:true,
  //     }
  //   })
  // },[])


  return (
    <div className="podlozka_expi">
      <div className="expi">
          <div className="expi_main">
              <div className="expi_textiscrol">
                <div className="expi_scrol">
                  {/* <Fancybox>
                    <a data-fancybox="gallery" href={img_expo_img1}>
                      <img src={img_expo_img1} alt="" className="expi_img expi_img2"/>
                    </a>
                  </Fancybox>
                  <Fancybox>
                    <a data-fancybox="gallery" href={img_expo_img2}>
                      <img src={img_expo_img2} alt="" className="expi_img expi_img1"/>
                    </a>
                  </Fancybox> */}
                  <Fancybox>
                    <a data-fancybox="gallery" href={img_cover_info1_back}>
                      <img src={img_cover_info1_back} alt="" className="expi_img expi_img1"/>
                    </a>
                  </Fancybox>
                </div>
                <div className="expi_text">И коврик для мыши большого размера,<br/>Планшеты, плейсматы и даже ланчмат<br/>Мы всё напечатаем - с нами опыт и вера!<br/>Скажи лишь, какой тираж и формат.</div>
              </div>
              <div className="expi_block_foto">
                <img src={img_expi_picture} alt="" className="expi_picture" />
                </div>
          </div>
          <img src={img_bg_expi1} alt="" className="expi_bg" /> 
      </div>
  </div>
  )
}

export default Expi