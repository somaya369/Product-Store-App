import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { addOrder } from "../features/orders/ordersSlice";
import { useSettings } from "../context/SettingsContext";
import Button from "../components/ui/Button";

const CheckoutPage = () => {
  const { state } = useSettings();
  const dispatch = useDispatch();

  const { items, totalPrice, totalQuantity } = useSelector(
    (state) => state.cart
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        dispatch(clearCart());
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [submitted, dispatch]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addOrder({
        customer: formData,
        items,
        totalQuantity,
        totalPrice,
      })
    );

    setSubmitted(true);
  };

  return (
    <main className="page checkout-page">
      <h1>{state.language === "fa" ? "ثبت سفارش" : "Checkout"}</h1>

      {submitted ? (
        <div className="checkout-success">
          <h2>
            {state.language === "fa"
              ? "سفارش ثبت شد ✅"
              : "Order submitted ✅"}
          </h2>
          <p>
            {state.language === "fa"
              ? "ممنون، سفارش شما با موفقیت ثبت شد."
              : "Thank you, your order has been submitted successfully."}
          </p>
        </div>
      ) : items.length === 0 ? (
        <p className="no-results">
          {state.language === "fa"
            ? "سبد خرید شما خالی است"
            : "Your cart is empty"}
        </p>
      ) : (
        <div className="checkout-layout">
          <form className="checkout-form" onSubmit={handleSubmit}>
            <input
              name="name"
              type="text"
              placeholder={state.language === "fa" ? "نام کامل" : "Full Name"}
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              name="email"
              type="email"
              placeholder={state.language === "fa" ? "ایمیل" : "Email"}
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              name="phone"
              type="text"
              placeholder={
                state.language === "fa" ? "شماره تماس" : "Phone Number"
              }
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <textarea
              name="address"
              placeholder={state.language === "fa" ? "آدرس" : "Address"}
              value={formData.address}
              onChange={handleChange}
              required
            />

            <Button type="submit">
              {state.language === "fa" ? "ثبت سفارش" : "Submit Order"}
            </Button>
          </form>

          <div className="checkout-summary">
            <h2>
              {state.language === "fa" ? "خلاصه سفارش" : "Order Summary"}
            </h2>
            <p>
              {state.language === "fa" ? "تعداد محصولات" : "Total Items"}:{" "}
              {totalQuantity}
            </p>
            <p>
              {state.language === "fa" ? "قیمت کل" : "Total Price"}: $
              {totalPrice.toFixed(2)}
            </p>
          </div>
        </div>
      )}
    </main>
  );
};

export default CheckoutPage;