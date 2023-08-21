import React, { useState } from "react";
import { list, all } from "../navbar/NavbarData";

function Navbar() {
  const [toggle, showMenu] = useState(false);
  const [data, setData] = useState(all);
  const [categoryList, setCategoryList] = useState(list);

  const click = (name) => {
    setCategoryList(categoryList);
    console.log(categoryList);
  };

  const filterList = (categoryDataList) => {
    const updatedList = categoryList.filter((curElem) => {
      return curElem.category === categoryDataList;
    });
    console.log(categoryList);
    console.log(filterList);
    setCategoryList(updatedList);
  };

  const filterData = (categoryData) => {
    const updatedData = all.filter((curElem) => {
      return curElem.category === categoryData;
    });
    console.log(data);
    setData(updatedData);
  };

  return (
    <>
      <aside className={toggle ? "aside show-menu" : "aside"}>
        <div className="nav">
          <nav className="nav__menu">
            <ul className="nav__list">
              <h3 className="nav__title">Hi</h3>
              {categoryList.map((elem) => {
                const {name} = elem;
                return (
                  <li
                    key={name}
                    onClick={() => click(name)}
                    className={
                      categoryList.name === name
                        ? "nav__menu nav__menu-active"
                        : "nav__menu"
                    }
                    style={{ color: "black" }}
                  >
                    <p className="nav__title">
                      {name}
                    </p>
                    <div className="menu">
                    {data.map((item) => {
                      const { id, name, image, price } = item;
                      return (
                        <li className="menu__item" key={id}>
                          <img className="menu__img"src={image} alt="icon" />
                          <span className="menu__price">{price}</span>
                          <h3 className="menu__title">{name}</h3>
                        </li>
                      );
                    })}
                    </div>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </aside>
      <div
        className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"}
        onClick={() => showMenu(!toggle)}
      >
        <i className="icon-menu"></i>
      </div>
    </>
  );
}

export default Navbar;
