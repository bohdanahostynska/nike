import React from 'react';
import Truck from "../../assets/footer/truck.svg";
import Stpw from "../../assets/footer/stw.svg";
import Shield from "../../assets/footer/shield.svg";
import Box from "../../assets/footer/cube.svg";
import Logo from "../../assets/footer/logo.svg";
import logo from "../../assets/footer/logo1.svg";

const Footer = () => {
  return (
    <div className='footer container section'>
              <div className="footer__top">
          <div className="footer__top__info">
            <div className="footer__top__left">
            <img src={Truck} alt="" className="footer__icon"/>
            </div>
            <div className="footer__right">
              <p className="footer__right__text">Free Delivery</p>
              <p className="footer__price">from $29.99</p>
            </div>
          </div>

          <div className="footer__top__info">
          <div className="footer__top__left">    
            <img src={Stpw} alt="" className="join__icon"/>
            </div>
            <div className="footer__right">
              <p className="footer__right__text">Free Withdrawal 1h</p>
              <p className="footer__price">in store</p>
            </div>
          </div>

          <div className="footer__top__info">
          <div className="footer__top__left">
            <img src={Shield} alt="" className="footer__icon"/>
            </div>
            <div className="footer__right">
              <p className="footer__right__text">100% Secure Payment</p>
              <p className="footer__price">at your service</p>
            </div>
          </div>

          <div className="footer__top__info">
          <div className="footer__top__left">
            <img src={Box} alt="" className="footer__icon"/>
            </div>
            <div className="footer__right">
              <p className="footer__right__text">Returns & Exchanges</p>
              <p className="footer__price">offered 365 days</p>
            </div>
          </div>
        </div>

        <div className="footer__main">
          <div className="footer__main__left">
            <img src={Logo} alt="" className="footer__bottom__img" />
          </div>

          <div className="footer__main__right">
            <div className="footer__left__column">
              <div className="top">
              <h4 className="footer__title__small">SHOP</h4>
              <nav className="footer__nav">
                <li className="footer__li">
                <p className="footer__text">Men</p></li>
                <li className="footer__li">
                <p className="footer__text">Women</p></li>
                <li className="footer__li">
                <p className="footer__text">New Arrival</p></li>
              </nav>
              </div>
              <div className="bottom">
              <h4 className="footer__title__small">CONTACT US</h4>
              <nav className="footer__nav">
                <li className="footer__li">
                  <p className="footer__text">Find a Store</p></li>
                <li className="footer__li">
                <p className="footer__text"> Contact Us</p>
                 </li>
                <li className="footer__li">
                <p className="footer__text"> Terms & Conditions</p>
                </li>
              </nav>
              </div>
            </div>

            <div className="footer__middle__column">
            <div className="top">
              <h4 className="footer__title__small">OUR SERVICES</h4>
              <nav className="footer__nav">
                <li className="footer__li">
                <p className="footer__text">Customize</p></li>
                <li className="footer__li">
                <p className="footer__text">Gift Card</p></li>
                <li className="footer__li">
                <p className="footer__text">Maintain & Repair</p></li>
              </nav>
            </div>
              <div className="bottom">
              <h4 className="footer__title__small">OUR ENTERPRISE</h4>
              <nav className="footer__nav">
                <li className="footer__li">
                <p className="footer__text">Who are we?</p></li>
                <li className="footer__li">
                <p className="footer__text">Press and news</p></li>
                <li className="footer__li">
                <p className="footer__text">Our alliances</p></li>
              </nav>
              </div>
            </div>
            
            <div className="footer__right__column">
            <h4 className="footer__title__small">NEED HELP?</h4>
            <nav className="footer__nav">
                <li className="footer__li">
                <p className="footer__text">My Account</p></li>
                <li className="footer__li">
                <p className="footer__text">Shipping</p></li>
                <li className="footer__li">
                <p className="footer__text">Return & Exchanges</p></li>
                <li className="footer__li">
                <p className="footer__text">FAQs</p></li>
                <li className="footer__li">
                <p className="footer__text">Rewards</p></li>
                <li className="footer__li">
                <p className="footer__text">Loyalty program</p></li>
                <li className="footer__li">
                <p className="footer__text">How to choose your product?</p></li>
                <li className="footer__li">
                <p className="footer__text">Sports Trends</p></li>
              </nav>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__bottom__left">
            <p className="footer__bottom__text">2022 Nike, Inc. All Rights Reserved
</p>
<img src={logo} alt="" className="footer__left__img" />
          </div>
          <div className="footer__bottom__right">
          <i className="fa-brands fa-youtube"id="youtube" style={{color:"white"}}></i>
          <i className="fa-brands fa-facebook"id="facebook"style={{color:"white"}}></i>
          <i className="fa-brands fa-twitter" id="twitter"style={{color:"white"}}></i>
          <i className="fa-brands fa-instagram" id="instagram"style={{color:"white"}}></i>
          </div>
        </div>
    </div>
  )
}

export default Footer