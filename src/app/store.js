import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import wishlistReducer from "../features/wishlist/wishlistSlice";
import authReducer from "../features/auth/authSlice";
import ordersReducer from "../features/orders/ordersSlice"; // 🔥 اضافه شد

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
    auth: authReducer,
    orders: ordersReducer, // 🔥 اضافه شد
  },
});