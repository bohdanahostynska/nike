import React from 'react';
import Rec from "../../assets/fav/Rectangle 7.svg";
import Box from "../../assets/modern/Box.svg";
import Sh1 from "../../assets/fav/sh1.svg";
import Sh2 from "../../assets/fav/sh2.svg";
import Sh3 from "../../assets/fav/sh3.svg";
import Logo1 from "../../assets/fav/Adidas.png";
import Logo2 from "../../assets/fav/nike3.jpg";
import Logo3 from "../../assets/fav/puma4.png";
import Logo4 from "../../assets/fav/converse2.png";
import Logo5 from "../../assets/fav/Logo 05.svg";
import Logo6 from "../../assets/fav/Logo 06.svg";
import Logo7 from "../../assets/fav/Logo 08.svg";
import Logo8 from "../../assets/fav/nb3.png";

const Favourite = () => {
  return (
    <div className='favourite container section'>
      <div className="favourite__info">
        <div className="favourite__top">
          <div className="favourite__titles">
        <h2 className="favourite__title">OUR FAVOURITE </h2>
        <h2 className="favourite__title1"> NIKE </h2>
        <h2 className="favourite__title">STYLES.</h2>
        </div>
        <img src={Rec} alt="" className="favourite__img" />
        </div>
        <div className="favourite__centre">
          <div className="favourite__item">
           <h3 className="favourite__subtitle">NIKE Mercurial Superfly</h3>
           <div className="favourite__product">
            <img src={Sh1} alt="" className="favourite__img" />
            <span className="favourite price">$271</span>

          </div>
          </div>
          <div className="favourite__item">
           <h3 className="favourite__subtitle">NIKE Air Zoom Alphafly</h3>
           <div className="favourite__product">
            <img src={Sh2} alt="" className="favourite__img" />
            <span className="favourite price">$216</span>
           </div>
          </div>
          <div className="favourite__item">
           <h3 className="favourite__subtitle">NIKE Dunk High</h3>
           <div className="favourite__product">
            <img src={Sh3} alt="" className="favourite__img" />
            <span className="favourite price">$187</span>
           </div>
          </div>
        </div>
        <div d="favourite__bottom">
          <div id="favourite__slider">
            <div class="slider container">
                <div class="slide-track">
                    <div class="slide d-flex justify-content-center align-items-center">
                    <img src={Logo1} alt="" className="favourite__icon" />
                    </div>
                    <div class="slide d-flex justify-content-center align-items-center">
                    <img src={Logo2} alt="" className="favourite__icon" />
                    </div>
                    <div class="slide d-flex justify-content-center align-items-center">
                    <img src={Logo3} alt="" className="favourite__icon" />
                    </div>
                    <div class="slide d-flex justify-content-center align-items-center">
                    <img src={Logo4} alt="" className="favourite__icon" />
                    </div>
                    <div class="slide d-flex justify-content-center align-items-center">
                    <img src={Logo5} alt="" className="favourite__icon" />
                    </div>
                    <div class="slide d-flex justify-content-center align-items-center">
                    <img src={Logo6} alt="" className="favourite__icon" />
                    </div>
                    <div class="slide d-flex justify-content-center align-items-center">
                    <img src={Logo7} alt="" className="favourite__icon" />
                    </div>
                    <div class="slide d-flex justify-content-center align-items-center">
                    <img src={Logo8} alt="" className="favourite__icon" />
                    </div>
                    <div class="slide d-flex justify-content-center align-items-center">
                    <img src={Logo1} alt="" className="favourite__icon" />
                    </div>
                    <div class="slide d-flex justify-content-center align-items-center">
                    <img src={Logo2} alt="" className="favourite__icon" />
                    </div>
                    <div class="slide d-flex justify-content-center align-items-center">
                    <img src={Logo3} alt="" className="favourite__icon" />
                    </div>
                    <div class="slide d-flex justify-content-center align-items-center">
                    <img src={Logo4} alt="" className="favourite__icon" />
                    </div>
                    <div class="slide d-flex justify-content-center align-items-center">
                    <img src={Logo5} alt="" className="favourite__icon" />
                    </div>
                    <div class="slide d-flex justify-content-center align-items-center">
                    <img src={Logo6} alt="" className="favourite__icon" />
                    </div>
                    <div class="slide d-flex justify-content-center align-items-center">
                    <img src={Logo7} alt="" className="favourite__icon" />
                    </div>
                    <div class="slide d-flex justify-content-center align-items-center">
                    <img src={Logo8} alt="" className="favourite__icon" />
                    </div>
                    <div class="slide d-flex justify-content-center align-items-center">
                    <img src={Logo1} alt="" className="favourite__icon" />
                    </div>
                    <div class="slide d-flex justify-content-center align-items-center">
                    <img src={Logo2} alt="" className="favourite__icon" />
                    </div>
                    <div class="slide d-flex justify-content-center align-items-center">
                    <img src={Logo3} alt="" className="favourite__icon" />
                    </div>
                    <div class="slide d-flex justify-content-center align-items-center">
                    <img src={Logo4} alt="" className="favourite__icon" />
                    </div>
                    <div class="slide d-flex justify-content-center align-items-center">
                    <img src={Logo5} alt="" className="favourite__icon" />
                    </div>
                </div>
            </div>
      </div>
      </div>
      </div>
      </div>
    
  )
}

export default Favourite
