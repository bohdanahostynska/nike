import React from 'react';
import Women from "../../assets/best/Women.svg";
import Kids from "../../assets/best/Kids.svg";
import Men from "../../assets/best/Men.svg";
import Shoe from "../../assets/main/ezgif 2.svg";
import Vector from "../../assets/sportstime/Vector 3.svg";

const Best = () => {
  return (
    <div className='best container section'>
        <img src={Shoe} alt="" className="best__img4" />
        <img src={Vector} alt="" className="best__img5" />
      <p className="best__title">BEST SELLERS</p>
      <div className="best__show">
        <div className="snip1573">
          <img src={Women} alt="" className="best__img1" />
          <figcaption>
          <h3>WOMEN</h3>
  </figcaption>
  
        </div>
        <div className="snip1573">
        <img src={Kids} alt="" className="best__img2" />
        <figcaption>
        <h3>KIDS</h3>
  </figcaption>

        </div>
        <div className="snip1573">
        <img src={Men} alt="" className="best__img3" />
        <figcaption>
        <h3>MEN</h3>
  </figcaption>
        </div>
      </div>
    </div>
  )
}

export default Best
