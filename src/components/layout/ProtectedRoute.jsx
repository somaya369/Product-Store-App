import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const location = useLocation(); // 🔥 مسیر فعلی

  if (!isAuthenticated) {
    return (
      <Navigate
        to="/login"
        state={{ from: location }} // 🔥 ذخیره مسیر
        replace
      />
    );
  }

  return children;
};

export default ProtectedRoute;