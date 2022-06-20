import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import cartReducer from "./slices/cartSlice";
import wishlistReducer from "./slices/wishlistSlice";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    wishlist: wishlistReducer,
  },
});
