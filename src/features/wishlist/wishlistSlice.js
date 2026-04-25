import { createSlice } from "@reduxjs/toolkit";

const loadWishlist = () => {
  try {
    const data = localStorage.getItem("wishlist");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

const saveWishlist = (items) => {
  localStorage.setItem("wishlist", JSON.stringify(items));
};

const initialState = {
  items: loadWishlist(),
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    toggleWishlist: (state, action) => {
      const product = action.payload;
      const exists = state.items.find((item) => item.id === product.id);

      if (exists) {
        state.items = state.items.filter((item) => item.id !== product.id);
      } else {
        state.items.push(product);
      }

      saveWishlist(state.items);
    },

    removeFromWishlist: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      saveWishlist(state.items);
    },
  },
});

export const { toggleWishlist, removeFromWishlist } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;