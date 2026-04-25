# 🛍️ Product Store App

## 📌 Project Overview
This project is a modern Product Store application built with React.  
It demonstrates real-world frontend development concepts including state management, API integration, routing, and user interaction.

The application allows users to browse products, manage a shopping cart, add items to a wishlist, authenticate, and place orders.

---

## 🎯 Objectives
The main purpose of this project is to demonstrate:

- Proper use of Context API + useReducer
- Efficient global state management with Redux Toolkit
- Data fetching and caching using React Query
- Clean and scalable React project structure

---

## 🚀 Features

### 🛒 Core Features
- Fetch products from API using React Query
- Display product list with dynamic UI
- Product details page
- Loading and error handling
- Pagination system

---

### 🔎 Product Interaction
- Search products by name or category
- Filter products by category
- Sort products:
  - Price (Low → High / High → Low)
  - Name (A → Z / Z → A)

---

### 🧠 State Management
- **Context API + useReducer**
  - Theme (Light / Dark)
  - Layout (Grid / List)
  - Language (English / Persian)

- **Redux Toolkit**
  - Cart management
  - Wishlist system
  - Authentication
  - Order history

---

### ❤️ Advanced Features (Bonus)
- Wishlist (favorite products)
- Authentication (Login / Register / Logout)
- Protected routes
- Smart redirect after login
- Checkout system
- Order history (saved in localStorage)
- Profile page

---

### 🎨 UI / UX
- Responsive design
- Clean and modern UI
- Multi-language support (English / Persian)
- Dynamic state updates
- User-friendly navigation
- Loading & error states

---

## 🛠️ Technologies Used

- React (Functional Components)
- React Router
- Redux Toolkit
- Context API + useReducer
- React Query (TanStack)
- Axios
- CSS

---

## 📂 Project Structure
Product_Store_App/
│
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   └── screenshot/
│
├── src/
│   ├── app/
│   │   └── store.js
│   │
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   │
│   ├── components/
│   │   ├── cart/
│   │   │   └── CartItem.jsx
│   │   │
│   │   ├── dashboard/
│   │   │   └── StatCard.jsx
│   │   │
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   │
│   │   ├── product/
│   │   │   ├── ProductCard.jsx
│   │   │   └── ProductList.jsx
│   │   │
│   │   ├── settings/
│   │   │   └── SettingsPanel.jsx
│   │   │
│   │   └── ui/
├   │   │ ── Button.jsx
│   │   ├──  ErrorMessage.jsx
│   │   └── Loader.jsx
│   │
│   ├── context/
│   │   ├── SettingsContext.jsx
│   │   └── settingsReducer.js
│   │
│   ├── features/
│   │   ├── auth/
│   │   │   └── authSlice.js
│   │   │
│   │   ├── cart/
│   │   │   └── cartSlice.js
│   │   │
│   │   ├── orders/
│   │   │   └── ordersSlice.js
│   │   │
│   │   └── wishlist/
│   │       └── wishlistSlice.js
│   │
│   ├── hooks/
│   │   └── useProducts.js
│   │
│   ├── i18n/
│   │   ├── productTranslations.js
│   │   └── translations.js
│   │
│   ├── pages/
│   │   ├── CartPage.jsx
│   │   ├── CheckoutPage.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Home.jsx
│   │   ├── LoginPage.jsx
│   │   ├── NotFound.jsx
│   │   ├── OrdersPage.jsx
│   │   ├── ProductDetails.jsx
│   │   ├── ProfilePage.jsx
│   │   ├── RegisterPage.jsx
│   │   └── WishlistPage.jsx
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── README.md
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
