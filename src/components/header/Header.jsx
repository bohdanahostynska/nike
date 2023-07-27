import React from 'react';
import Logo from "../../assets/main/Logo.svg"

const Header = () => {
  return (
          <section className="header container section">
      <div className="header__centre">
        <img src={Logo}alt="logo" className="header__centre__logo" />
      </div>
      <div className="header__right">
        <ul className="header__list__right">
          <li className="header__icon">
          <a href="#search" className="header__link">
          <i className="icon-magnifier"></i>
          </a>
        </li>

        <li className="header__icon">
          <a href="#user" className="header__link">
          <i className="icon-user"></i>
          </a>
        </li>

        <li className="header__icon">
          <a href="#bag" className="header__link">
          <i className="icon-bag"></i>
          </a>
        </li>
        </ul>
      </div>  
      </section>
  )
}

export default Header
