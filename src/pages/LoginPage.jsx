import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";
import { useNavigate, Link, useLocation } from "react-router-dom"; // 🔥 اضافه شد
import { useSettings } from "../context/SettingsContext";
import Button from "../components/ui/Button";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation(); // 🔥

  const { state } = useSettings();

  // 🔥 مسیر قبلی (اگر نبود → home)
  const from = location.state?.from?.pathname || "/";

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login(formData));
    navigate(from, { replace: true }); // 🔥 تغییر مهم
  };

  return (
    <main className="page auth-page">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h1>{state.language === "fa" ? "ورود" : "Login"}</h1>

        <input
          name="email"
          type="email"
          placeholder={state.language === "fa" ? "ایمیل" : "Email"}
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          name="password"
          type="password"
          placeholder={state.language === "fa" ? "رمز عبور" : "Password"}
          value={formData.password}
          onChange={handleChange}
          required
        />

        <Button type="submit">
          {state.language === "fa" ? "ورود" : "Login"}
        </Button>

        <p>
          {state.language === "fa"
            ? "حساب نداری؟"
            : "Don't have an account?"}{" "}
          <Link to="/register">
            {state.language === "fa" ? "ثبت‌نام" : "Register"}
          </Link>
        </p>
      </form>
    </main>
  );
};

export default LoginPage;