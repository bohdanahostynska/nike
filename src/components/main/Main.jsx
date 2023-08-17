import React,{useState} from "react";
import Header from "../header/Header";
import Image1 from "../../assets/main/mainImage.svg";
import vector from "../../assets/main/vector.svg";
import icon1 from "../../assets/main/Product (1).svg";
import icon2 from "../../assets/main/Product (2).svg";
import icon3 from "../../assets/main/Product 08 1.svg";
import icon4 from "../../assets/main/Product 09 1.svg";
import icon5 from "../../assets/main/Product 10 1.svg";
import icon6 from "../../assets/main/Product 11 1.svg";
import icon7 from "../../assets/main/Product 12 1.svg";
import icon8 from "../../assets/main/img.png";
import Labels from "../../assets/main/Labels.svg";


import { Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";


export const products = [
  {
    id: 1,
    name: "Nike Cosmic Unity 2",
    image: icon1,
    price:87
  },
  {
    id: 2,
    name: "NIKE SB Dunk High",
    image: icon2,
    price:77
  },
  {
    id: 3,
    name: "Nike Dark",
    image: icon3,
    price:90
  },
  {
    id: 4,
    name: "Nike Briliant Dime",
    image: icon4,
    price:68
  },
  {
    id: 5,
    name: "Nike Night Air",
    image: icon5,
    price:62
  },
  {
    id: 6,
    name: "Nike Cosmic Unity 3",
    image: icon6,
    price:92
  },
  {
    id: 7,
    name: "Nike Space basketball sneakers",
    image: icon7,
    price:98
  },
  {
    id: 8,
    name: "Nike Jordan",
    image: icon8,
    price:88
  },
];

const Main = () => {
  const [cart, setCart] = useState([]);
  const addItemToCart = (product) => {
    
     setCart([...cart, product]);
     console.log(product);
    const existingItem = cart.find(item => item.product.id === product.id);
    if (existingItem) {
      const updatedCart = cart.map(item =>
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

  return (
    <section className="main container section">
      <Header />
      <div className="main__top">
        <div className="main__top__left">
          <img src={Image1} alt="main" className="main__image"/>
        </div>
        <div className="main__top__right">
          <h2 className="main__title">AIR JORDAN 1 RETRO HIGH OG</h2>
          <div className="main__info">
            <p className="main__price">$275</p>
            <div className="main__menu">
              <p className="main__size">Size</p>
              <div className="main__drop__down">
                <span className="main__number">39</span>
                <span className="main__number-1">40</span>
                <span className="main__number-2">41</span>
              </div>
              <img src={vector} alt="" className="icon-arrow-down" />
              <i className="icon-bag"></i>
            </div>
          </div>
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
        className="main__bottom "
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
        {products.map(product =>{
          const { id,name, image,price } = product;
          return (
            <SwiperSlide className="main__bottom__item" key={id}>
              <div className="main__bottom_info">
                <div className="main__bottom__data">
                <div className="main__bottom_thumb">
                  <img src={image} className="swiper-shoe"alt="" />
                </div>        
                <h3 className="main__bottom__title">{name}</h3>
                <span className="main__bottom__price">{price}$</span>
                <button className="main__bottom__button"onClick={() => addItemToCart(product)}>Buy Now</button>

              </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

    <div className="main__cart">
    <div className='main__content'>
  
    <div className="main__purchase">
        <ul className="main__ul">
          {cart.map(item => (
            <li className="main__li" key={item.product.id}>
              <div className="main__cart__left">
              <img src={item.product.image} className="main_cart_img"alt="" /></div>
              <div className="main__cart__right">
              <p className="main__price">{item.product.price}$</p>
</div>
              - Quantity: {item.quantity}
            </li>
          ))}
        </ul>
      <div></div>
      </div>
      <button className="btn">Checkout</button>
      </div>
  </div>

      <div className="main__background"><img src={Labels} alt="" /></div>
    </section>
  );
};

export default Main;
