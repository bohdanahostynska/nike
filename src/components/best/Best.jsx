import React from 'react';
import Women from "../../assets/best/Women.svg";
import Kids from "../../assets/best/Kids.svg";
import Men from "../../assets/best/Men.svg";


const Best = () => {
  return (
    <div className='best container section'>
      <p className="best__title">BEST SELLERS</p>
      <div className="best__show">
        <div className="best__women">
          <img src={Women} alt="" className="best__img1" />
        </div>
        <div className="best__kids">
        <img src={Kids} alt="" className="best__img2" />
        </div>
        <div className="best__men">
        <img src={Men} alt="" className="best__img3" />
        </div>
      </div>
    </div>
  )
}

export default Best
