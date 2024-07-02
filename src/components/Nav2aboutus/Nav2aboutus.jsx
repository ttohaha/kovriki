import React, {useEffect} from 'react'

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';

import img_backNav from '../../img/nav2_back.png'
import img_nav2_picture from '../../img/nav2_picture.png'
import img_nav2img from '../../img/nav2img.JPG'
import './Nav2aboutus.css'

function Nav2aboutus() {
    gsap.registerPlugin(useGSAP,ScrollTrigger);

    useEffect(()=>{
        gsap.fromTo('.nav2_img1', {y:0, opacity:1},{
          y:-250,
          opacity:0,
          scrollTrigger:{
            trigger:'.nav2_main',
            start:'+400 top',
            end:'1000',
            scrub:true,
          }
        })

        gsap.fromTo('.nav2_text', {y:0, opacity:1},{
            y:-170,
            opacity:0,
            scrollTrigger:{
              trigger:'.nav2_main',
              start:'+200 top',
              end:'1000',
              scrub:true,
            }
          })

          gsap.fromTo('.nav2_img2', {opacity:1},{
            opacity:0,
            scrollTrigger:{
              trigger:'.nav2_main',
              start:'+50 top',
              end:'+300',
              scrub:true,
            //   markers:true
            }
          })
        
      },[])

  return (
    <div className="nav2_caver">
        <div className='nav2'>
            
            <div className="nav2_main">
                <img src={img_nav2_picture} alt="" className="nav2_img1" />
                <div className="nav2_text">Нет лучше подарка, чем коврик для мыши!<br/> Реклама на нем всегда под рукой.<br/> Как Пушкин придумаем, как Пикассо напишем -<br/> никто вам не сделает коврик такой!</div>
                <img src={img_nav2img} alt="" className="nav2_img2" />
                
            </div>
            <img src={img_backNav} alt="" className="nav2_back" />
        </div>
    </div> 
  )
}

export default Nav2aboutus