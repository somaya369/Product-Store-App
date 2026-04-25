import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../features/wishlist/wishlistSlice"; // 🔥 اضافه شد
import { useSettings } from "../context/SettingsContext";
import { translateProduct } from "../i18n/productTranslations";
import Button from "../components/ui/Button";

const WishlistPage = () => {
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();
  const { state } = useSettings();

  return (
    <main className="page">
      <h1>{state.language === "fa" ? "علاقه‌مندی‌ها ❤️" : "Wishlist ❤️"}</h1>

      {wishlistItems.length === 0 ? (
        <p className="no-results">
          {state.language === "fa"
            ? "لیست علاقه‌مندی‌ها خالی است"
            : "Wishlist is empty"}
        </p>
      ) : (
        <div className="products-grid">
          {wishlistItems.map((item) => {
            const translatedItem = translateProduct(item, state.language);

            return (
              <div key={item.id} className="product-card grid">
                <img
                  src={item.image}
                  alt={translatedItem.title}
                  className="product-image"
                />

                <div className="product-info">
                  <h3>{translatedItem.title}</h3>
                  <p className="category">{translatedItem.category}</p>
                  <p className="price">${item.price}</p>

                  <Button onClick={() => dispatch(removeFromWishlist(item.id))}>
                    {state.language === "fa" ? "حذف از علاقه‌مندی" : "Remove"}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
};

export default WishlistPage;