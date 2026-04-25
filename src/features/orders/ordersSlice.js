import { createSlice } from "@reduxjs/toolkit";

const loadOrders = () => {
  try {
    const data = localStorage.getItem("orders");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

const saveOrders = (orders) => {
  localStorage.setItem("orders", JSON.stringify(orders));
};

const initialState = {
  items: loadOrders(),
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOrder: (state, action) => {
      const newOrder = {
        id: Date.now(),
        date: new Date().toLocaleString(),
        ...action.payload,
      };

      state.items.unshift(newOrder);
      saveOrders(state.items);
    },

    clearOrders: (state) => {
      state.items = [];
      localStorage.removeItem("orders");
    },
  },
});

export const { addOrder, clearOrders } = ordersSlice.actions;
export default ordersSlice.reducer;