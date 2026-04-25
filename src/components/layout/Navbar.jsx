import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import { useSettings } from "../../context/SettingsContext";
import { translations } from "../../i18n/translations";

const Navbar = () => {
  const dispatch = useDispatch();

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const wishlistCount = useSelector((state) => state.wishlist.items.length);
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  const { state } = useSettings();
  const t = translations[state.language];

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Product Store
      </Link>

      <div className="nav-links">
        {isAuthenticated ? (
          <>
            <NavLink to="/">{t.home}</NavLink>
            <NavLink to="/dashboard">{t.dashboard}</NavLink>

            {/* 🔥 Profile */}
            <NavLink to="/profile">
              {state.language === "fa" ? "پروفایل" : "Profile"}
            </NavLink>

            {/* 🔥 Orders */}
            <NavLink to="/orders">
              {state.language === "fa" ? "سفارش‌ها" : "Orders"}
            </NavLink>

            <NavLink to="/wishlist">
              ❤️ Wishlist ({wishlistCount})
            </NavLink>

            <NavLink to="/cart">
              {t.cart} ({totalQuantity})
            </NavLink>

            <span className="user-name">
              {state.language === "fa" ? "سلام" : "Hi"}{" "}
              {user?.name || user?.email}
            </span>

            <button
              className="logout-btn"
              onClick={() => dispatch(logout())}
            >
              {state.language === "fa" ? "خروج" : "Logout"}
            </button>
          </>
        ) : (
          <>
            <NavLink to="/login">
              {state.language === "fa" ? "ورود" : "Login"}
            </NavLink>

            <NavLink to="/register">
              {state.language === "fa" ? "ثبت‌نام" : "Register"}
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;