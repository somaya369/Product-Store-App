import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast"; // 🔥 اضافه شد
import App from "./App";
import { store } from "./app/store";
import { SettingsProvider } from "./context/SettingsContext";
import "./index.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <SettingsProvider>
          <App />
          <Toaster position="top-center" /> {/* 🔥 اضافه شد */}
        </SettingsProvider>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);