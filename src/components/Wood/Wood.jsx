import React from 'react'

import Fancybox from '../Fancybox/Fancybox';

import img_wood_img1 from '../../img2/wood_img1.png'
import img_wood_img2 from '../../img2/wood_img2.png'
import img_bg_wood from '../../img2/bg_wood3.JPG'
import img_wood_picture from '../../img2/wood_picture.png'

import './Wood.css'

function Wood() {
  return (
    <div className="podlozka_wood">
      <div className="wood">
          <div className="wood_main">
              <div className="wood_textiscrol">
                <div className="wood_scrol">
                  {/* <img src={img_wood_img1} alt="" className="wood_img wood_img2" />
                  <img src={img_wood_img2} alt="" className="wood_img wood_img1" /> */}
                  <Fancybox>
                    <a data-fancybox="gallery" href={img_wood_img1}>
                      <img src={img_wood_img1} alt="" className="wood_img wood_img2" />
                    </a>
                  </Fancybox>
                  <Fancybox>
                    <a data-fancybox="gallery" href={img_wood_img2}>
                      <img src={img_wood_img2} alt="" className="wood_img wood_img1" />
                    </a>
                  </Fancybox>
                </div>
                <div className="wood_text">А это ещё пример нашей работы<br/> Из щёток зубных - именные творим<br/>С подарком коллегам не будет заботы,<br/>Бамбуковая щётка уже не мейнстрим!</div>
              </div>
              <div className="wood_block_foto">
                <img src={img_wood_picture} alt="" className="wood_picture" />
                </div>
          </div>
          <img src={img_bg_wood} alt="" className="wood_bg" /> 
      </div>
  </div>
  )
}

export default Wood