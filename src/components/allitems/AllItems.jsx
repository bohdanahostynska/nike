import React, { useState } from "react";
import { list, all } from "./AllItemsData";

const AllItems = ({items}) => {
// //   const [toggle, showMenu] = useState(false);
// //   const [data, setData] = useState(all);
// //   const [categoryList, setCategoryList] = useState(list);

// //   const onClick = (name) => {
// //     // setCategoryList(categoryList);
// //     setData(data)
// //     console.log(categoryList);
// //     console.log(data);
// //   };

// //   const filterList = (categoryDataList) => {
// //     const updatedList = categoryList.filter((curElem) => {
// //       return curElem.category === categoryDataList;
// //     });
// //     console.log(categoryList);
// //     console.log(filterList);
// //     setCategoryList(updatedList);
// //   };

//   const filterData = (categoryData) => {
//     const updatedData = all.filter((curElem) => {
//       return curElem.category === categoryData;
//     });
//     console.log(data);
//     setData(updatedData);
//   };

//   return (
//     // <>
//     //   <aside className={toggle ? "aside show-menu" : ""}>
//     //     <div className="nav">
//     //       <nav className="nav__menu">
//     //         <ul className="nav__list">
//     //           {categoryList.map((elem) => {
//     //             const {name} = elem;
//     //             return (
//     //               <li
//     //                 key={name}
//     //                 onClick={() => filterData()}
//     //                 className={
//     //                   categoryList.name === name
//     //                     ? all
//     //                     : ""
//     //                 }
//     //                 style={{ color: "black" }}
//     //               >
//     //                 <p className="nav__title">
//     //                   {name}
//     //                 </p>
//     //                 <div className="menu__list">
//     //                 {data.map((item) => {
//     //                   const { id, name, image, price } = item;
//     //                   return (
//     //                     <li className="menu__item" key={id}>
//     //                       <img className="menu__img"src={image} alt="icon" />
//     //                       <span className="menu__price">{price}</span>
//     //                       <h3 className="menu__title">{name}</h3>
//     //                     </li>
//     //                   );
//     //                 })}
//     //                 </div>
//     //               </li>
//     //             );
//     //           })}
//     //         </ul>
//     //       </nav>
//     //     </div>
//     //   </aside>
//     //   <div
//     //     className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"}
//     //     onClick={() => showMenu(!toggle)}
//     //   >
//     //     <i className="icon-menu"></i>
//     //   </div>
//     // </>
//   );
// }

const [selectedCategory, setSelectedCategory] = useState(all);

const handleCategoryClick = (category) => {
  setSelectedCategory(category);
  console.log(selectedCategory);
  console.log(category);
};

  const filteredItems = selectedCategory === all ? all.items : all.filter(item => item.category === selectedCategory);

  return (
    <div className="menu__items">
      <div className="menu__list">
        {/* <label className="category">Select Category:</label>      */}
        <button className="but" onClick={() => handleCategoryClick('all')}>All</button>
        <button className="but" onClick={() => handleCategoryClick('men')}>Men</button>
        <button className="but" onClick={() => handleCategoryClick('women')}>Women</button>
        <button className="but" onClick={() => handleCategoryClick('kids')}>Kids</button>
      </div>
      <ul className="nav__list">
        {filteredItems && all.map((item) => { 
            const { id, name, image, price,category } = item;
            return( 
          <li className="menu__item" key={category+id}>
             <img className="menu__image"src={image} alt="icon" />
             <h3 className="menu__title">{price}</h3>
              <h3 className="menu__title">{name}</h3>
          </li>)
        })}
      </ul>
    </div>
  );
};


export default AllItems;
