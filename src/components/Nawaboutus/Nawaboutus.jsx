import React from 'react'

import './Nawaboutus.css'
import img_picAvtor from '../../img/picAvtor.png'
import img_picText from '../../img/picText.png'
import img_pusAvtor from '../../img/pusAvtor.png'
import img_pusText from '../../img/pusText.png'

function Nawaboutus() {
  return (
    <div className="nawaboutus">
        <div className="nawaboutus_left nawaboutus_box">
            <img src={img_picText} alt="" className="nawaboutus_left_avt nawaboutus_img_1" />
            <img src={img_picAvtor} alt="" className="nawaboutus_left_avt nawaboutus_img_2" />
        </div>

        <div className="nawaboutus_center nawaboutus_box">
            <div className="nawaboutus_center_text">Нет лучше подарка, чем коврик для мыши! Реклама на нем всегда под рукой. Как Пушкин придумаем, как Пикассо напишем - никто вам не сделает коврик такой!</div>
        </div>

        <div className="nawaboutus_right nawaboutus_box">
            <img src={img_pusAvtor} alt="" className="nawaboutus_left_avt nawaboutus_img_3" />
            <img src={img_pusText} alt="" className="nawaboutus_left_avt nawaboutus_img_4" />
        </div>
    </div>
  )
}

export default Nawaboutus