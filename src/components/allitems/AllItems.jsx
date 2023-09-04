import React, { useState } from "react";
 import { men, all,kids,women } from "./AllItemsData";

 

const AllItems = ({items}) => {

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
    <div className="menu">
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

    </div>
  );
};


export default AllItems;
