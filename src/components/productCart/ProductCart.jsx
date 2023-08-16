import React, { useReducer,useState} from 'react';




  //   function getAmountPerProduct(cartItems, productName) {
  //     // return cart.filter(item => item.name === productName).length;
  //     return cartItems.filter(item => item.name === productName).length;
  // }
  
  // function getTotal(cartItems) {
  //   return cartItems.reduce((totalCost, item) => totalCost + item.price, 0);
  // }

  
  // function cartReducer(state, action) {
  //   switch(action.type) {
  //     case 'add':
  //       return [...state, action.product];
  //     case 'remove':
  //       const productIndex = state.findIndex(item => item.name === action.product.name);
  //       if(productIndex < 0) {
  //         return state;
  //       }
  //       const update = [...state];
  //       update.splice(productIndex, 1)
  //       return update
  //       case 'ADD_TO_CART':
  //         return {
  //           ...state,
  //           cartItems: [...state.cart, action.payload],
  //         };
  //       default:
  //         return state;
  //   }
  // }

export default function ProductCart() {

  //  const [cart, setCart] = useReducer(cartReducer, []);
   const [cartItems, setCartItems] = useState([]);
  // const [cartItems, setCartItems] = useReducer(cartReducer, []);
  
  // function add(product) {
  //   const action = { product, type: 'add' };
  //   setCartItems(action);

  // }

  // function remove(product) {
  //   const action = { product, type: 'remove' };
  //   setCartItems(action);
  // }

return(
  <div className="product container section">
    <div className="product__cart">
    <div className='product__content'>
    </div>
    <div className="product__purchase">
      <p className='product__title'>
      <ul>
        {cartItems.map((item, index,id) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>

      {/* Total items: {cartItems.length}  */}
      </p>
      {/* <p className='product__title'>Total price: {getTotal(cartItems)}$</p> */}
      <div><button className="btn">Checkout</button></div>
      </div>
  </div>

  </div>
)
}