import React, {useEffect} from 'react'

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';

// import img_evro_bg1 from '../../img/evro_bg1.JPG'
// import img_evro_bg2 from '../../img/evro_bg2.JPG'
// import img_evro_bg3 from '../../img/evro_bg3.JPG'
import img_evro_bg4 from '../../img2/evro_bg2.JPG'
import img_evro_pictire from '../../img2/evro_pictire1.png'
import img_evro_cover from '../../img2/evro_cover.png'
import img_evro_car from '../../img2/evro_car.png'


import './Evro.css'

function Evro() {
    gsap.registerPlugin(useGSAP,ScrollTrigger);

    useEffect(()=>{
        gsap.fromTo('.evro_img_cover', {opacity:0,y:+100},{
          opacity:1,
          y:0,
          scrollTrigger:{
            trigger:'.podlozka_evro',
            start:'top bottom',
            end:'top +450',
            scrub:true,
          }
        })

        gsap.fromTo('.evro_img_pictire', {opacity:0,y:+200},{
            opacity:1,
            y:0,
            scrollTrigger:{
              trigger:'.podlozka_evro',
              start:'top bottom',
              end:'top center',
              scrub:true,
            
            }
          })
          
        gsap.fromTo('.evro_text', {opacity:0,y:+300},{
            opacity:1,
            y:0,
            scrollTrigger:{
            trigger:'.podlozka_evro',
            start:'top bottom',
            end:'center center',
            scrub:true,
            // markers:true
          }
        })

        gsap.fromTo('.evro_img_car', {opacity:0,y:+50},{
            y:0,
            opacity:1,
            scrollTrigger:{
            trigger:'.podlozka_evro',
            start:'top center',
            end:'top center',
            scrub:true,
          }
        })

        gsap.fromTo('.evro_img_pictire', {opacity:1,y:0},{
          y:-100,
          opacity:0,
          scrollTrigger:{
          trigger:'.podlozka_expi',
          start:'top +150',
          end:'top top',
          scrub:true,
          // markers:true
        }
      })

      gsap.fromTo('.evro_img_cover', {opacity:1,y:0},{
        y:-50,
        opacity:0,
        scrollTrigger:{
        trigger:'.podlozka_expi',
        start:'top +125',
        end:'top top',
        scrub:true,
        // markers:true
      }
    })

    gsap.fromTo('.evro_text', {opacity:1,y:0},{
      y:-150,
      opacity:0,
      scrollTrigger:{
      trigger:'.podlozka_expi',
      start:'top +250',
      end:'top top',
      scrub:true,
      // markers:true
    }
  })

  gsap.fromTo('.evro_img_car', {opacity:1,y:0},{
    y:-50,
    opacity:0,
    scrollTrigger:{
    trigger:'.podlozka_expi',
    start:'top bottom',
    end:'top top',
    scrub:true,
    // markers:true
  }
})

gsap.fromTo('.evro_img_cover_mobile', {opacity:1,y:0},{
  y:-50,
  opacity:0,
  scrollTrigger:{
  trigger:'.podlozka_expi',
  start:'top bottom',
    end:'top top',
  scrub:true,
  // markers:true
}
})

gsap.fromTo('.evro_text_mobile', {opacity:1,y:0},{
  y:-75,
  opacity:0,
  scrollTrigger:{
  trigger:'.podlozka_expi',
  start:'top +500',
    end:'top top',
  scrub:true,
  // markers:true
}
})
      },[])

  return (
    <div className="evro_zzz">
    <div className="podlozka_evro">
        <div className="evro">
            <div className="evro_main">
                <div className="evro_imgtext">
                    <img src={img_evro_pictire} alt="" className="evro_img_pictire" />
                    <div className="evro_text">Мы можем печатать вот так или эдак. <br/>Мы 20 лет в теме и нет лучше нас.<br/>Везем из Европы (в обход всех разведок)<br/>Мы все материалы - чтоб радовать вас.</div>
                    <div className="evro_text_mobile">Мы можем печатать вот так или эдак. <br/>Мы 20 лет в теме и нет лучше нас.<br/>Везем из Европы (в обход всех разведок)<br/>Мы все материалы - чтоб радовать вас.</div>
                    <img src={img_evro_cover} alt="" className="evro_img_cover_mobile" />
                
                </div>
            </div>
            {/* img. */}
            <img src={img_evro_bg4} alt="" className="evro_bg" />
            <img src={img_evro_cover} alt="" className="evro_img_cover" />
            <img src={img_evro_car} alt="" className="evro_img_car" />
        </div>
    </div>
    </div>
    
  )
}

export default Evro