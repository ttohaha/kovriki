import React from 'react'

import './Call.css'

import img_bg_call1 from '../../img/bg_call1.JPG'
import img_bg_call2 from '../../img/bg_call2.JPG'
import img_call_cover from '../../img/call_cover.png'
import img_call_men from '../../img/call_men.png'
import img_call_men2 from '../../img/call_men2.png'
import img_call_women from '../../img/call_women.png'


function Call() {
  return (
    <div className="podlozka_call">
        <div className="call">
            <div className="call_main">
                <img src={img_call_women} alt="" className="call_women_img_mobile" />
                <div className="call_text">
                    <div className="call_text_flex">Давай подытожим: c коврами поможем. <br/> Твой лого умеем на всё наносить.<br/>А чтобы подробно узнать, что мы можем,<br/>Тебе только надо набрать и спросить.</div>
                </div>
                <img src={img_call_men2} alt="" className="call_men_img_mobile" />
            </div>
            {/* <img src={img_call_cover} alt="" className="call_cover_img" /> */}
            <img src={img_call_men} alt="" className="call_men_img" />
            <img src={img_call_women} alt="" className="call_women_img" />
            <img src={img_bg_call2} alt="" className="bg_call" />
        </div>
    </div>
)
}

export default Call