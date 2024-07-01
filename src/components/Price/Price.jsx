import React from 'react'
import img_girleprice1 from '../../img/girleprice1.png'
import img_girleprice2 from '../../img/girleprice2.png'

import './Price.css';

function Price() {
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