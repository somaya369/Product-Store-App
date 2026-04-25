import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../features/auth/authSlice";
import { useSettings } from "../context/SettingsContext";
import Button from "../components/ui/Button";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useSettings();

  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <main className="page profile-page">
      <div className="profile-card">
        <h1>{state.language === "fa" ? "پروفایل کاربر" : "User Profile"}</h1>

        <div className="profile-info">
          <p>
            <strong>{state.language === "fa" ? "نام" : "Name"}:</strong>{" "}
            {user?.name || "N/A"}
          </p>

          <p>
            <strong>{state.language === "fa" ? "ایمیل" : "Email"}:</strong>{" "}
            {user?.email || "N/A"}
          </p>

          <p>
            <strong>{state.language === "fa" ? "وضعیت" : "Status"}:</strong>{" "}
            {state.language === "fa" ? "وارد شده" : "Logged in"}
          </p>
        </div>

        <Button onClick={handleLogout}>
          {state.language === "fa" ? "خروج" : "Logout"}
        </Button>
      </div>
    </main>
  );
};

export default ProfilePage;