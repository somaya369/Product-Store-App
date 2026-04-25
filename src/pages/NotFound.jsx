import { Link } from "react-router-dom";
import { useSettings } from "../context/SettingsContext";

const NotFound = () => {
  const { state } = useSettings();

  return (
    <main className="page not-found-page">
      <h1>404</h1>

      <p>
        {state.language === "fa"
          ? "صفحه مورد نظر پیدا نشد"
          : "Page not found"}
      </p>

      <Link to="/" className="checkout-link">
        {state.language === "fa" ? "بازگشت به خانه" : "Back to Home"}
      </Link>
    </main>
  );
};

export default NotFound;