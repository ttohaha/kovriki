import React, {useEffect} from 'react'

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

import './Nawaboutus.css'
import img_picAvtor from '../../img2/picAvtor_last.png'
import img_picText from '../../img2/picText.png'
import img_pusAvtor from '../../img2/pusAvtor_last.png'
import img_pusText from '../../img2/pusText.png'
import img_backNav from '../../img2/backheader.JPG'
import img_nav2img from '../../img/nav2img.JPG'


function Nawaboutus() {
  gsap.registerPlugin(useGSAP,ScrollTrigger);

  return (
    <div className="nawaboutus">

        <div className="nawaboutus_kartinas1 nawaboutus_kartinas">
          <LazyLoadImage
            alt=''
            effect="opacity"
            wrapperProps={{
                style: {transitionDelay: "0.0s"},
            }}
            src={img_pusAvtor} 
            className="nawaboutus_pusAvtor"
          />
          {/* <div className="nawaboutus_kartinas1 nawaboutus_kartinas"> */}
          <LazyLoadImage
            alt=''
            effect="opacity"
            wrapperProps={{
                style: {transitionDelay: "0.0s"},
            }}
            src={img_pusText} 
            className="nawaboutus_pusText"
          />
          {/* <img src={img_pusAvtor} alt="" className="nawaboutus_pusAvtor" loadding='lazyeage'/> */}
          {/* <img src={img_pusText} alt="" className="nawaboutus_pusText" /> */}
        </div>
        
        <div className="nawaboutus_text_box">
            <div className="nawaboutus_text">Нет лучше подарка, чем коврик для мыши!<br/> Реклама на нем всегда под рукой.<br/> Как Пушкин придумаем, как Пикассо напишем-<br/> Никто вам не сделает коврик такой!</div>
        </div>

        <div className="nawaboutus_kartinas2 nawaboutus_kartinas">
          {/* <img src={img_picAvtor} alt="" className="nawaboutus_picAvtor" />
          <img src={img_picText} alt="" className="nawaboutus_picText" /> */}

          <LazyLoadImage
            alt=''
            effect="opacity"
            wrapperProps={{
                style: {transitionDelay: "0.0s"},
            }}
            src={img_picAvtor} 
            className="nawaboutus_picAvtor"
          />
          <LazyLoadImage
            alt=''
            effect="opacity"
            wrapperProps={{
                style: {transitionDelay: "0.0s"},
            }}
            src={img_picText} 
            className="nawaboutus_picText"
          />
        </div>

        <img src={img_nav2img} alt="" className="nawaboutus_piture" />

        <img src={img_backNav} alt="" className="nawaboutus_back" />
        {/* <LazyLoadImage
            alt=''
            effect="opacity"
            wrapperProps={{
                style: {transitionDelay: "0.0s"},
            }}
            src={img_nav2img} 
            className="nawaboutus_piture"
          />
        <LazyLoadImage
            alt=''
            effect="opacity"
            wrapperProps={{
                style: {transitionDelay: "0.0s"},
            }}
            src={img_backNav} 
            className="nawaboutus_back"
          /> */}
    </div>
  )
}

export default Nawaboutus