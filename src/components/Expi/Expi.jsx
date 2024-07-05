import React from 'react'

import img_bg_expi1 from '../../img/bg_expi1.JPG'
import img_bg_expi2 from '../../img/bg_expi2.JPG'
import img_expo_img1 from '../../img/expo_img1.png'
import img_expo_img2 from '../../img/expo_img2.png'
import img_expi_picture from '../../img/expi_picture.JPG'

import './Expi.css'

function Expi() {
  return (
    <div className="podlozka_expi">
        <div className="expi">
            <div className="expi_main">
                <div className="expi_textiscrol">
                  <div className="expi_scrol">
                    <img src={img_expo_img1} alt="" className="expi_img expi_img2" />
                    <img src={img_expo_img2} alt="" className="expi_img expi_img1" />
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