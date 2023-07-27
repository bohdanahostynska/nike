import React, { useState } from "react";


function Navbar() {
    const [toggle,showMenu]= useState(false);
  return (
    
    
    <><aside className={toggle ? "aside show-menu" : "aside"}>
          <div className="nav">
              <nav className="nav__menu">
                  <ul className="nav__list">
                      <li className="nav__item">
                          <a href="#new arrival" className="nav__menu__link"><h4 className="nav__title">NEW ARRIVAL</h4></a>
                      </li>

                      <li className="nav__item">
                          <a href="#men" className="nav__link">
                              <h4 className="nav__title">MEN</h4>
                          </a>
                      </li>

                      <li className="nav__item">
                          <a href="#women" className="nav__link">
                          <h4 className="nav__title">WOMEN</h4>
                          </a>
                      </li>

                      <li className="nav__item">
                          <a href="#kids" className="nav__link">
                          <h4 className="nav__title">KIDS</h4>
                          </a>
                      </li>
                  </ul>

              </nav>
          </div>
      </aside><div className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"} onClick={() => showMenu(!toggle)}>
              <i className="icon-menu"></i>
          </div></>
 
  )
}

export default Navbar
