import React, { useState } from "react";
import { products } from "./MainData";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import Labels from "../../assets/main/Labels.svg";
import Image1 from "../../assets/main/mainImage.svg";
import Logo from "../../assets/main/Logo.svg";
import Form from "../form/Form";




const Main = () => {
  const [cart,setCart]=useState([])
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  const toggleCart= () => {
    setIsCartOpen(!isCartOpen);
  };


  const addItemToCart = (product) => {
    setCart([...cart, product]);
    console.log(product);
    const existingItem = cart.find((item) => item.product.id === product.id);
    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.product.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      const newItem = { product, quantity: 1 };
      setCart([...cart, newItem]);
    }
  };
  const removeFromCart = (product) => {
    const updatedCartItem = cart
      .map((item) => {
        if (item.product.id === product.id) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      })
      .filter((item) => item.quantity > 0);
    setCart(updatedCartItem);
  };

  const calculateProductPrice = (product) => {
    const updateItemPrice = cart.find((item) => item.product.id === product.id);
    return updateItemPrice
      ? updateItemPrice.product.price * updateItemPrice.quantity
      : 0;
  };

  const calculateTotalPrice = () => {
    return cart.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  };

  return (
    <section className="main container section">
      <div className="header container section">
        <div className="header__centre">
          <img src={Logo} alt="logo" className="header__centre__logo" />
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
                <button className="header__btn"onClick={toggleForm}>
                {isFormOpen ? "" : <Form/>}
                <i className="icon-user"></i></button>
              </a>
            </li>

            <li className="header__icon">
              <a href="#bag" className="header__link" onClick={toggleCart}>
                {isCartOpen ? "" :""}
                <i className="icon-bag"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="main__top container section">
        <div className="main__top__left">
          <img src={Image1} alt="main" className="main__image" />
        </div>
        <div className="main__top__right">
          <h2 className="main__title">AIR JORDAN 1 RETRO HIGH OG</h2>
          <button className="btn">
            More Details
            <img src="" alt="" className="button-img" />
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8183 2.53941C10.7129 2.46053 10.5929 2.40325 10.4653 2.37084L3.57548 0.780193C3.447 0.750531 3.31394 0.746466 3.18389 0.768229C3.05384 0.789992 2.92934 0.837157 2.81752 0.907032C2.59168 1.04815 2.43116 1.2732 2.37125 1.53268C2.34159 1.66116 2.33752 1.79422 2.35929 1.92427C2.38105 2.05432 2.42822 2.17881 2.49809 2.29064C2.63921 2.51647 2.86426 2.677 3.12374 2.73691L7.66573 3.77825L1.22905 7.80034C1.00413 7.94088 0.844255 8.16502 0.784595 8.42343C0.724934 8.68185 0.770373 8.95339 0.910916 9.17831C1.05146 9.40322 1.27559 9.56309 1.53401 9.62276C1.79243 9.68242 2.06397 9.63698 2.28888 9.49643L8.72557 5.47435L7.67044 10.0132C7.64022 10.1417 7.63574 10.2749 7.65726 10.4051C7.67878 10.5354 7.72588 10.6601 7.79583 10.772C7.86579 10.884 7.95722 10.981 8.06485 11.0574C8.17248 11.1338 8.29418 11.1882 8.42293 11.2174C8.55143 11.2476 8.68465 11.2521 8.8149 11.2306C8.94514 11.209 9.06984 11.162 9.18179 11.092C9.29374 11.022 9.39074 10.9306 9.46718 10.823C9.54362 10.7154 9.59799 10.5936 9.62716 10.4649L11.2178 3.57507C11.2446 3.44617 11.2457 3.31325 11.221 3.18393C11.1768 2.92446 11.0321 2.69288 10.8183 2.53941Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>

      <Swiper
        className="main__bottom container section "
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        grabCursor={true}
      >
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        {products.map((product) => {
          const { id, name, image, price } = product;
          return (
            <SwiperSlide className="main__bottom__item" key={id}>
              <div className="main__bottom_info">
                <div className="main__bottom__data">
                  <div className="main__bottom_thumb">
                    <img src={image} className="swiper-shoe" alt="" />
                  </div>
                  <h3 className="main__bottom__title">{name}</h3>
                  <span className="main__bottom__price">{price}$</span>
                  <button
                    className="main__bottom__button"
                    onClick={() => addItemToCart(product)}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {isCartOpen && (
        <div className="main__cart">
          <div className="main__content">
            <div className="main__purchase">
              <button className="main__cart__btn" onClick={toggleCart}>
                Checkout
              </button>
              <ul className="main__ul">
                {cart.map((item) => (
                  <li className="main__li" key={item.product.id}>
                    <div className="main__cart__top">
                    <div className="main__cart__left">
                      <img
                        src={item.product.image}
                        className="main__cart__img"
                        alt=""
                      />
                    </div>
                    <div className="main__cart__right">
                      <p className="main__cart__title">{item.product.name}</p>
                    </div>
                    </div>
                    <br/>
                <br/>
                    <div className="main__cart__bottom">
                    <span className="main__cart__title">
                        ${calculateProductPrice(item.product)}
                      </span>

                    <button
                      className="main__cart__button"
                      onClick={() => removeFromCart(item.product)}
                    >
                      -
                    </button>

                    <span className="main__cart__number"> {item.quantity}</span>
                    <button
                      className="main__cart__button"
                      onClick={() => addItemToCart(item.product)}
                    >
                      +
                    </button>
                    </div>
                  </li>
                ))}
              </ul>
              <div>
                <br/>
                <br/>
                <span className="main__cart__title">
                  Total Price: ${calculateTotalPrice(products)}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="main__background container section ">
        <img src={Labels} alt="" />
      </div>
    </section>
  );
};

export default Main;
