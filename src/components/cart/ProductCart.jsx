import React, { useReducer} from 'react';
import {products}from "../main/Main"

    function getAmountPerProduct(cart, productName) {
      return cart.filter(item => item.name === productName).length;
  }
  
  function getTotal(cart) {
    return cart.reduce((totalCost, item) => totalCost + item.price, 0);
  }
  
  function cartReducer(state, action) {
    switch(action.type) {
      case 'add':
        return [...state, action.product];
      case 'remove':
        const productIndex = state.findIndex(item => item.name === action.product.name);
        if(productIndex < 0) {
          return state;
        }
        const update = [...state];
        update.splice(productIndex, 1)
        return update
      default:
        return state;
    }
  }

export default function Product() {
  const [cart, setCart] = useReducer(cartReducer, []);

  function add(product) {
    const action = { product, type: 'add' };
    setCart(action);
  }

  function remove(product) {
    const action = { product, type: 'remove' };
    setCart(action);
  }

return(
  <div className="product container section">
    <div className="product__cart">
    <div className='product__content'>
      {products.map(product =>{
          const { id,name, image,price } = product;
        return(
          <div  className="product__offer"key={id}>
          <div className="product__info">
          <p className='product__text'>{name}</p>
         <p className='product__text'>{price}</p>
          </div>
          <div className='product__choice'>  
          <div className="product__img">    
          <img src={image} alt="product" className="product__image"/>
          </div> 
          <div className="product__option">
            <button className='product__btn' onClick={() => add(product)}>+</button><b className='product__btn'>{getAmountPerProduct(cart, product.name)}</b>
            <button  className='product__btn'onClick={() => remove(product)}>-</button>
            </div>
          </div>
          
        </div>
        )
      }
      
      )}
    </div>
    <div className="product__purchase">
      <p className='product__title'>
      Total items: {cart.length} 
      </p>
      <p className='product__title'>Total price: {getTotal(cart)} USD</p>
      <div><button className="btn">Checkout</button></div>
      </div>
  </div>

  </div>
)
}