import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import { toggleWishlist } from "../../features/wishlist/wishlistSlice";
import { useSettings } from "../../context/SettingsContext";
import { translations } from "../../i18n/translations";
import { translateProduct } from "../../i18n/productTranslations";
import toast from "react-hot-toast";
import Button from "../ui/Button";

const ProductCard = ({ product, view }) => {
  const dispatch = useDispatch();
  const { state } = useSettings();
  const t = translations[state.language];

  const wishlistItems = useSelector((state) => state.wishlist.items);
  const isFavorite = wishlistItems.some((item) => item.id === product.id);

  const translatedProduct = translateProduct(product, state.language);

  return (
    <div className={`product-card ${view}`}>
      <button
        className={`wishlist-btn ${isFavorite ? "active" : ""}`}
        onClick={() => dispatch(toggleWishlist(product))}
      >
        {isFavorite ? "❤️" : "🤍"}
      </button>

      <img
        src={product.image}
        alt={translatedProduct.title}
        className="product-image"
      />

      <div className="product-info">
        <h3>{translatedProduct.title}</h3>
        <p className="category">{translatedProduct.category}</p>
        <p className="price">${product.price}</p>

        <div className="card-actions">
          <Link to={`/products/${product.id}`} className="details-link">
            {t.viewDetails}
          </Link>

          <Button
            onClick={() => {
              dispatch(addToCart(product));
              toast.success(t.addedToCart);
            }}
          >
            {t.addToCart}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;