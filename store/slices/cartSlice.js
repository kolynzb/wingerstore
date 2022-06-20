import { createSlice } from "@reduxjs/toolkit";
import data from "../../dummyData/dummyData";
const initialState = {
  cart: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(data.filter((product) => product.id == action.payload));
    },
    removeFromCart: (state, action) => {
      const index = state.cart.indexOf(
        state.cart.filter((product) => product.id == action.payload)[0]
      );
      if (index > -1) {
        state.cart.splice(index, 1);
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
