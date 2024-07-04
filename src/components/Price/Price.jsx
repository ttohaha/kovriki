import React, {useEffect} from 'react'

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';

import img_girleprice1 from '../../img/girleprice1.png'
import img_girleprice2 from '../../img/girleprice2.png'

import './Price.css';

function Price() {
  gsap.registerPlugin(useGSAP,ScrollTrigger);

  useEffect(()=>{
    gsap.fromTo('.price_comp_img1', {opacity:0,y:+500},{
      opacity:0.65,
      y:0,
      scrollTrigger:{
        trigger:'.podlozka_1',
        start:'top bottom',
        end:'+500',
        scrub:true,
      }
    })

    gsap.fromTo('.price_comp_text', {opacity:0,y:+1000},{
      opacity:0.65,
      y:0,
      scrollTrigger:{
        trigger:'.podlozka_1',
        start:'top bottom',
        end:'+750',
        scrub:true,
        // markers:true
      }
    })

    gsap.fromTo('.price_comp_img2', {opacity:0,},{
      opacity:0.65,
      scrollTrigger:{
        trigger:'.podlozka_1',
        start:'top bottom',
        end:'+800',
        scrub:true,
        // markers:true
      }
    })

    gsap.fromTo('.price_comp_img1', {opacity:0.65,y:0},{
      opacity:0,
      y:-200,
      scrollTrigger:{
        trigger:'.cdek',
        start:'center bottom',
        end:'bottom',
        scrub:true,
      }
    })

    gsap.fromTo('.price_comp_text', {opacity:0.65,y:0},{
      opacity:0,
      y:-450,
      scrollTrigger:{
        trigger:'.cdek',
        start:'center bottom',
        end:'bottom',
        scrub:true,
      }
    })

    gsap.fromTo('.price_comp_img2', {opacity:0.65,},{
      opacity:0,
      // y:-300,
      scrollTrigger:{
        trigger:'.cdek',
        start:'center bottom',
        end:'bottom',
        scrub:true,
      }
    })

  },[])

  return (
  <div className="podlozka_1">
    <div className='price_comp'>
      <img src={img_girleprice1} alt="" className='price_comp_img1'/>
      <div className="price_comp_text">Всего 100 рублей за такой сувенир!<br/> Отбрось все сомнения и шли нам макет.<br/> Красивым дизайном укрась стол и мир!<br/> Поверь, лучше нашего коврика нет.</div>
      <img src={img_girleprice2} alt=""  className='price_comp_img2'/>
    </div>
  </div>
    
  )
}

export default Price