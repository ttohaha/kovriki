import React, {useEffect} from 'react'

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';

import './Nawaboutus.css'
import img_picAvtor from '../../img2/picAvtor.png'
import img_picText from '../../img/picText.png'
import img_pusAvtor from '../../img2/pusAvtor.png'
import img_pusText from '../../img/pusText.png'
import img_backNav from '../../img2/backheader.JPG'
import img_nav2img from '../../img/nav2img.JPG'


function Nawaboutus() {
  gsap.registerPlugin(useGSAP,ScrollTrigger);

  return (
    <div className="nawaboutus">

        <div className="nawaboutus_kartinas1 nawaboutus_kartinas">
          <img src={img_pusAvtor} alt="" className="nawaboutus_pusAvtor" />
          <img src={img_pusText} alt="" className="nawaboutus_pusText" />
        </div>
        
        <div className="nawaboutus_text_box">
            <div className="nawaboutus_text">Нет лучше подарка, чем коврик для мыши!<br/> Реклама на нем всегда под рукой.<br/> Как Пушкин придумаем, как Пикассо напишем-<br/> никто вам не сделает коврик такой!</div>
        </div>

        <div className="nawaboutus_kartinas2 nawaboutus_kartinas">
          <img src={img_picAvtor} alt="" className="nawaboutus_picAvtor" />
          <img src={img_picText} alt="" className="nawaboutus_picText" />
        </div>

        <img src={img_nav2img} alt="" className="nawaboutus_piture" />

        <img src={img_backNav} alt="" className="nawaboutus_back" />
    </div>
  )
}

export default Nawaboutus