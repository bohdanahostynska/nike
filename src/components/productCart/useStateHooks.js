import { useState, useReducer } from "react";

const useStatesHooks = () => {
  // const [cart, setCart] = useReducer(cartReducer, []);
  // const [cartItems, setCartItems] = useState([]);
  const [data, setData] = useState([]);
  return { data, setData };
};

function cartReducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.data];
    case "remove":
      const dataIndex = state.findIndex(
        (item) => item.name === action.data.name
      );
      if (dataIndex < 0) {
        return state;
      }
      const update = [...state];
      update.splice(dataIndex, 1);
      return update;
    default:
      return state;
  }
}

export default useStatesHooks;
