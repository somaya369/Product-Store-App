import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../features/auth/authSlice";
import { useNavigate, Link } from "react-router-dom";
import { useSettings } from "../context/SettingsContext";
import Button from "../components/ui/Button";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useSettings();

  const [formData, setFormData] = useState({
    name: "",
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

    dispatch(register(formData));
    navigate("/");
  };

  return (
    <main className="page auth-page">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h1>{state.language === "fa" ? "ثبت‌نام" : "Register"}</h1>

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
          name="password"
          type="password"
          placeholder={state.language === "fa" ? "رمز عبور" : "Password"}
          value={formData.password}
          onChange={handleChange}
          required
        />

        <Button type="submit">
          {state.language === "fa" ? "ثبت‌نام" : "Register"}
        </Button>

        <p>
          {state.language === "fa"
            ? "قبلاً حساب داری؟"
            : "Already have an account?"}{" "}
          <Link to="/login">
            {state.language === "fa" ? "ورود" : "Login"}
          </Link>
        </p>
      </form>
    </main>
  );
};

export default RegisterPage;