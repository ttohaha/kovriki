import React, {useEffect} from 'react'

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,Autoplay,EffectFade } from 'swiper/modules';
import Fancybox from '../Fancybox/Fancybox';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';


import evro_slide_1 from '../../img2/evro_slide_1.png'
import evro_slide_2 from '../../img2/evro_slide_2.png'
import evro_slide_3 from '../../img2/evro_slide_3.png'
import evro_slide_4 from '../../img2/evro_slide_4.png'
import evro_slide_5 from '../../img2/evro_slide_5.png'
import evro_slide_6 from '../../img2/evro_slide_6.png'
import evro_slide_7 from '../../img2/evro_slide_7.png'
import evro_slide_8 from '../../img2/evro_slide_8.png'

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

//     useEffect(()=>{
//         gsap.fromTo('.evro_img_cover', {opacity:0,y:+100},{
//           opacity:1,
//           y:0,
//           scrollTrigger:{
//             trigger:'.podlozka_evro',
//             start:'top bottom',
//             end:'top +450',
//             scrub:true,
//           }
//         })

//         gsap.fromTo('.evro_img_pictire', {opacity:0,y:+200},{
//             opacity:1,
//             y:0,
//             scrollTrigger:{
//               trigger:'.podlozka_evro',
//               start:'top bottom',
//               end:'top center',
//               scrub:true,
            
//             }
//           })
          
//         gsap.fromTo('.evro_text', {opacity:0,y:+300},{
//             opacity:1,
//             y:0,
//             scrollTrigger:{
//             trigger:'.podlozka_evro',
//             start:'top bottom',
//             end:'center center',
//             scrub:true,
//             // markers:true
//           }
//         })

//         gsap.fromTo('.evro_img_car', {opacity:0,y:+50},{
//             y:0,
//             opacity:1,
//             scrollTrigger:{
//             trigger:'.podlozka_evro',
//             start:'top center',
//             end:'top center',
//             scrub:true,
//           }
//         })

//         gsap.fromTo('.evro_img_pictire', {opacity:1,y:0},{
//           y:-100,
//           opacity:0,
//           scrollTrigger:{
//           trigger:'.podlozka_expi',
//           start:'top +150',
//           end:'top top',
//           scrub:true,
//           // markers:true
//         }
//       })

//       gsap.fromTo('.evro_img_cover', {opacity:1,y:0},{
//         y:-50,
//         opacity:0,
//         scrollTrigger:{
//         trigger:'.podlozka_expi',
//         start:'top +125',
//         end:'top top',
//         scrub:true,
//         // markers:true
//       }
//     })

//     gsap.fromTo('.evro_text', {opacity:1,y:0},{
//       y:-150,
//       opacity:0,
//       scrollTrigger:{
//       trigger:'.podlozka_expi',
//       start:'top +250',
//       end:'top top',
//       scrub:true,
//       // markers:true
//     }
//   })

//   gsap.fromTo('.evro_img_car', {opacity:1,y:0},{
//     y:-50,
//     opacity:0,
//     scrollTrigger:{
//     trigger:'.podlozka_expi',
//     start:'top bottom',
//     end:'top top',
//     scrub:true,
//     // markers:true
//   }
// })

// gsap.fromTo('.evro_img_cover_mobile', {opacity:1,y:0},{
//   y:-50,
//   opacity:0,
//   scrollTrigger:{
//   trigger:'.podlozka_expi',
//   start:'top bottom',
//     end:'top top',
//   scrub:true,
//   // markers:true
// }
// })

// gsap.fromTo('.evro_text_mobile', {opacity:1,y:0},{
//   y:-75,
//   opacity:0,
//   scrollTrigger:{
//   trigger:'.podlozka_expi',
//   start:'top +500',
//     end:'top top',
//   scrub:true,
//   // markers:true
// }
// })
//       },[])

useEffect(()=>{
  gsap.fromTo('.evro_img_pictire', {opacity:1},{
    opacity:0,
    scrollTrigger:{
      trigger:'.podlozka_evro',
      start:'top 20%',
      end:'top top',
      scrub:true,
    }
  })
  gsap.fromTo('.evro_img_pictire', {display:'block'},{
    display:'none',
    scrollTrigger:{
      trigger:'.podlozka_evro',
      start:'top 20%',
      end:'top 5%',
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
                  <div className="evro_img_slide_pict">
                    <img src={img_evro_pictire} alt="" className="evro_img_pictire" />
                    <Swiper
                      autoplay={{
                        delay: 2500,
                      }}
                      // pagination={{
                      //   clickable: true,
                      // }}
                      // effect={'fade'}
                      modules={[Autoplay, Pagination,EffectFade]}
                      className="evro_slider"
                    >
                      <SwiperSlide>
                        <p className='evro_slide_text'>Лазерная резка</p>
                        <Fancybox>
                          <a data-fancybox="gallery" href={evro_slide_1}>
                            <img src={evro_slide_1} alt="" className="evro_slid"/>
                          </a>
                        </Fancybox>
                      </SwiperSlide>

                      <SwiperSlide>
                      <p className='evro_slide_text evro_slide_text_pdf'><div className='evro_slide_text_pdf__'>DTF</div>печать</p>
                        <Fancybox>
                          <a data-fancybox="gallery" href={evro_slide_2}>
                            <img src={evro_slide_2} alt="" className="evro_slid"/>
                          </a>
                        </Fancybox>
                      </SwiperSlide>
                      
                      <SwiperSlide>
                      <p className='evro_slide_text'>Вырубка тиснение</p>
                        <Fancybox>
                          <a data-fancybox="gallery" href={evro_slide_3}>
                            <img src={evro_slide_3} alt="" className="evro_slid"/>
                          </a>
                        </Fancybox>
                      </SwiperSlide>
                      
                      <SwiperSlide>
                      <p className='evro_slide_text'>УФ печать 2х3 метра</p>
                        <Fancybox>
                          <a data-fancybox="gallery" href={evro_slide_4}>
                            <img src={evro_slide_4} alt="" className="evro_slid"/>
                          </a>
                        </Fancybox>
                      </SwiperSlide>
                      
                      <SwiperSlide>
                      <p className='evro_slide_text'>Резка</p>
                        <Fancybox>
                          <a data-fancybox="gallery" href={evro_slide_5}>
                            <img src={evro_slide_5} alt="" className="evro_slid"/>
                          </a>
                        </Fancybox>
                      </SwiperSlide>
                      
                      <SwiperSlide>
                      <p className='evro_slide_text'>Изготовление ковриков</p>
                        <Fancybox>
                          <a data-fancybox="gallery" href={evro_slide_6}>
                            <img src={evro_slide_6} alt="" className="evro_slid"/>
                          </a>
                        </Fancybox>
                      </SwiperSlide>
                      
                      <SwiperSlide>
                      <p className='evro_slide_text'>Широкоформатная печать</p>
                        <Fancybox>
                          <a data-fancybox="gallery" href={evro_slide_7}>
                            <img src={evro_slide_7} alt="" className="evro_slid"/>
                          </a>
                        </Fancybox>
                      </SwiperSlide>
                      
                      <SwiperSlide>
                      <p className='evro_slide_text'>Шелкография термотрансфер</p>
                        <Fancybox>
                          <a data-fancybox="gallery" href={evro_slide_8}>
                            <img src={evro_slide_8} alt="" className="evro_slid"/>
                          </a>
                        </Fancybox>
                      </SwiperSlide>
                      
                    </Swiper>
                  </div>
                    <div className="evro_text">Мы можем печатать вот так или эдак. <br/>Мы 20 лет в теме и нет лучше нас.<br/>Везем из Европы (в обход всех разведок)<br/>Мы все материалы - чтоб радовать вас.</div>
                    <div className="evro_text_mobile">Мы можем печатать вот так или эдак. <br/>Мы 20 лет в теме и нет лучше нас.<br/>Везем из Европы (в обход всех разведок)<br/>Мы все материалы - чтоб радовать вас.</div>
                    <img src={img_evro_cover} alt="" className="evro_img_cover_mobile" />
                </div>
            </div>
            <img src={img_evro_bg4} alt="" className="evro_bg" />
            <img src={img_evro_cover} alt="" className="evro_img_cover" />
            <img src={img_evro_car} alt="" className="evro_img_car" />
        </div>
    </div>
    </div>
    
  )
}

export default Evro