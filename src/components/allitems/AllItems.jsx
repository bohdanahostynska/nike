import React, { useState } from "react";
 import { men, all,kids,women } from "./AllItemsData";


 

const AllItems = ({items}) => {
  const [show, setShow] = useState(false);
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  const ariaExpanded = show ? 'true' : 'false';
  const hamClass = show ? 'ham active' : 'ham';

const [selectedCategory, setSelectedCategory] = useState(all);
const [isHidden, setIsHidden] = useState(true);

const handleCategoryClick = (category) => {
  setSelectedCategory(category);
  console.log(selectedCategory);
  console.log(category);
};
function toggleVisibility() {
  setIsHidden(!isHidden);
}

const handleClicks=()=>{
  toggleVisibility();
  handleCategoryClick (all);
}
  const filteredItems = selectedCategory === all ? all.items : all.filter(item => item.category === selectedCategory);

  return (
    <div className="menu container section">
      <div className="menu__list"> 
        <button className="but" onClick={() => handleClicks()}>All</button>
        <button className="but" onClick={() => handleCategoryClick(men)}>Men</button>
        <button className="but" onClick={() => handleCategoryClick(women)}>Women</button>
        <button className="but" onClick={() => handleCategoryClick(kids)}>Kids</button>
      </div>
      {isHidden ? null : 
       <nav className="menu__content" id='menu' role="button">  
       <div className="menu__items">
        {selectedCategory.map(({ id, name, image, price,category }) =>  ( 
          <li className="menu__item" key={id}>
             <img className="menu__image"src={image} alt="icon" />
             <h3 className="menu__title">{price}$</h3>
              <h3 className="menu__title">{name}</h3>
          </li>)
        )}
      </div></nav>}
      {show ?      
      <div className="ham__list"> 
        <button className="ham__title" onClick={() => handleClicks()}>All</button>
        <button className="ham__title" onClick={() => handleCategoryClick(men)}>Men</button>
        <button className="ham__title" onClick={() => handleCategoryClick(women)}>Women</button>
        <button className="ham__title" onClick={() => handleCategoryClick(kids)}>Kids</button>
    </div>:null
      }
      <svg
        x-data="{ show: false }"
        onClick={toggleShow}
        aria-expanded={ariaExpanded}
        className={hamClass}
        viewBox="0 0 100 100"
        width="50"
      >
        <path
          className="line top"
          d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
        />
        <path className="line middle" d="m 30,50 h 40" />
        <path
          className="line bottom"
          d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
        />
      </svg>
    </div>
  );
};


export default AllItems;
