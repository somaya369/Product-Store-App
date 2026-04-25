import { createSlice } from "@reduxjs/toolkit";

// 🔽 load cart from localStorage
const loadCart = () => {
  try {
    const data = localStorage.getItem("cart");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

const initialState = {
  items: loadCart(), // 🔥 از localStorage
  totalQuantity: 0,
  totalPrice: 0,
};

// 🔽 calculate totals + save
const calculateTotals = (state) => {
  state.totalQuantity = state.items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  state.totalPrice = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // 🔥 ذخیره در localStorage
  localStorage.setItem("cart", JSON.stringify(state.items));
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }

      calculateTotals(state);
    },

    increaseQuantity: (state, action) => {
      const item = state.items.find(
        (item) => item.id === action.payload
      );

      if (item) {
        item.quantity += 1;
      }

      calculateTotals(state);
    },

    decreaseQuantity: (state, action) => {
      const item = state.items.find(
        (item) => item.id === action.payload
      );

      if (!item) return;

      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.items = state.items.filter(
          (i) => i.id !== action.payload
        );
      }

      calculateTotals(state);
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );

      calculateTotals(state);
    },

    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;

      // 🔥 پاک کردن از localStorage
      localStorage.removeItem("cart");
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;