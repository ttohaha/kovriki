import React, {useEffect} from 'react'

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';

import img_cdek_car from '../../img/cdek_car.png'
import img_bg_cdek from '../../img2/bg_sdek3.JPG'
import img_cdek_cover1 from '../../img/cdek_cover1.png'
import img_ihcover_cdek1 from '../../img2/ihcover_cdek11.png'
import img_ihcover_cdek2 from '../../img2/ihcover_cdek2.png'
import img_cdek_angle from '../../img/cdek_angle.png'

import './Cdek.css'

function Cdek() {
  gsap.registerPlugin(useGSAP,ScrollTrigger);

  useEffect(()=>{
    gsap.fromTo('.cdek_doroga', {opacity:0,y:+100},{
      opacity:1,
      y:0,
      scrollTrigger:{
        trigger:'.cdek',
        start:'top bottom',
        end:'+1300',
        scrub:true,
      }
    })

    gsap.fromTo('.cdek_text', {opacity:0,y:+600},{
      opacity:1,
      y:0,
      scrollTrigger:{
        trigger:'.cdek',
        start:'top bottom',
        end:'+1200',
        scrub:true,
      }
    })

    gsap.fromTo('.cdek_kovri_img2', {opacity:0,y:+500},{
      opacity:1,
      y:0,
      scrollTrigger:{
        trigger:'.cdek',
        start:'center +900',
        end:'+1350',
        scrub:true,
      }
    })

    gsap.fromTo('.cdek_kovri_img1', {opacity:0,y:+500},{
      opacity:1,
      y:0,
      scrollTrigger:{
        trigger:'.cdek',
        start:'center +900',
        end:'+1425',
        scrub:true,
      }
    })

    gsap.fromTo('.cdek_doroga_car', {opacity:1,x:0},{
      opacity:0,
      x:-2000,
      scrollTrigger:{
        trigger:'.cdek',
        start:'+1400',
        end:'+2400',
        scrub:true,
      }
    })


  },[])

  return (
    <div className='podlozka_cdek'>
      <div className="cdek">
        <div className="cdek_main">

          <div className="cdek_doroga">
            <img src={img_cdek_car} alt="" className="cdek_doroga_car" />
          </div>

          <div className="cdek_text_block">
            <div className='cdek_text'>Стандарт - это круг или прямоугольник.<br/>Мы сделаем быстро, за день или два.<br/> Отправим их сдэком, все будут довольны...<br/> Лишь скинь нам по счету оплату сперва.</div>
          </div>

          <div className="cdek_kovri">
            <img src={img_ihcover_cdek1} alt="" className="cdek_kovri_img1 cdek_kovri_img" />
            <img src={img_ihcover_cdek2} alt="" className="cdek_kovri_img2 cdek_kovri_img" />
            {/* <img src={img_cdek_cover1} alt="" className="cdek_kovri_img3" /> */}
          </div>
        </div>
        <img src={img_bg_cdek} alt="" className="cdek_bg" />
        {/* <img src={img_cdek_angle} alt="" className="cdek_angle" /> */}
      </div>
    </div>
  )
}

export default Cdek