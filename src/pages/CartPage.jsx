import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"; // 🔥 اضافه شد
import { useSettings } from "../context/SettingsContext";
import { translations } from "../i18n/translations";
import CartItem from "../components/cart/CartItem";
import Button from "../components/ui/Button";
import { clearCart } from "../features/cart/cartSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const { state } = useSettings();
  const t = translations[state.language];

  const { items, totalPrice, totalQuantity } = useSelector(
    (state) => state.cart
  );

  return (
    <main className="page">
      <h1>{t.yourCart}</h1>

      {items.length === 0 ? (
        <p>{t.emptyCart}</p>
      ) : (
        <>
          <div className="cart-list">
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="cart-summary">
            <h3>
              {t.totalCartItems}: {totalQuantity}
            </h3>
            <h3>
              {t.totalCartPrice}: ${totalPrice.toFixed(2)}
            </h3>

            <Button onClick={() => dispatch(clearCart())}>
              {t.clearCart}
            </Button>

            {/* 🔥 دکمه رفتن به Checkout */}
            <Link to="/checkout" className="checkout-link">
              {state.language === "fa"
                ? "رفتن به ثبت سفارش"
                : "Go to Checkout"}
            </Link>
          </div>
        </>
      )}
    </main>
  );
};

export default CartPage;