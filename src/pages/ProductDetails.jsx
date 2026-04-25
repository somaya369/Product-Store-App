import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useProductById } from "../hooks/useProducts";
import { addToCart } from "../features/cart/cartSlice";
import { useSettings } from "../context/SettingsContext";
import { translations } from "../i18n/translations";
import { translateProduct } from "../i18n/productTranslations";
import toast from "react-hot-toast"; // 🔥 اضافه شد
import Loader from "../components/ui/Loader";
import ErrorMessage from "../components/ui/ErrorMessage";
import Button from "../components/ui/Button";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { state } = useSettings();
  const t = translations[state.language];

  const { data: product, isLoading, isError, error } = useProductById(id);

  if (isLoading) {
    return (
      <Loader
        text={
          state.language === "fa"
            ? "در حال بارگذاری جزئیات محصول..."
            : "Loading product details..."
        }
      />
    );
  }

  if (isError) {
    return <ErrorMessage message={error.message} />;
  }

  const translatedProduct = translateProduct(product, state.language);

  return (
    <main className="page details-page">
      <img
        src={product.image}
        alt={translatedProduct.title}
        className="details-image"
      />

      <div className="details-info">
        <h1>{translatedProduct.title}</h1>
        <p className="category">{translatedProduct.category}</p>
        <p>{translatedProduct.description}</p>
        <h2>${product.price}</h2>

        <Button
          onClick={() => {
            dispatch(addToCart(product));
            toast.success(t.addedToCart); // 🔥 این خط مهم
          }}
        >
          {t.addToCart}
        </Button>
      </div>
    </main>
  );
};

export default ProductDetails;