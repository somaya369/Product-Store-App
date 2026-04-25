import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { useSettings } from "../../context/SettingsContext";
import { translations } from "../../i18n/translations";
import { translateProduct } from "../../i18n/productTranslations";
import Button from "../ui/Button";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const { state } = useSettings();
  const t = translations[state.language];

  const translatedItem = translateProduct(item, state.language);

  return (
    <div className="cart-item">
      <img src={item.image} alt={translatedItem.title} className="cart-image" />

      <div className="cart-info">
        <h3>{translatedItem.title}</h3>
        <p>${item.price}</p>
        <p>
          {state.language === "fa" ? "تعداد" : "Quantity"}: {item.quantity}
        </p>

        <div className="cart-actions">
          <Button onClick={() => dispatch(increaseQuantity(item.id))}>+</Button>
          <Button onClick={() => dispatch(decreaseQuantity(item.id))}>-</Button>
          <Button onClick={() => dispatch(removeFromCart(item.id))}>
            {state.language === "fa" ? "حذف" : "Remove"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;