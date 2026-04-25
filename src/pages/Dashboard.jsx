import { useSelector } from "react-redux";
import { useProducts } from "../hooks/useProducts";
import { useSettings } from "../context/SettingsContext";
import { translations } from "../i18n/translations";
import Loader from "../components/ui/Loader";
import ErrorMessage from "../components/ui/ErrorMessage";
import StatCard from "../components/dashboard/StatCard";

const Dashboard = () => {
  const { data: products, isLoading, isError, error } = useProducts();
  const { state } = useSettings();
  const cart = useSelector((state) => state.cart);
  const t = translations[state.language];

  if (isLoading) return <Loader text={t.loadingDashboard} />;
  if (isError) return <ErrorMessage message={error.message} />;

  return (
    <main className="page">
      <h1>{t.dashboard}</h1>

      <div className="dashboard-grid">
        <StatCard title={t.totalProducts} value={products.length} />
        <StatCard title={t.totalCartItems} value={cart.totalQuantity} />
        <StatCard
          title={t.totalCartPrice}
          value={`$${cart.totalPrice.toFixed(2)}`}
        />
        <StatCard title={t.currentTheme} value={state.theme} />
        <StatCard title={t.currentView} value={state.view} />
        <StatCard title={t.currentLanguage} value={state.language} />
      </div>
    </main>
  );
};

export default Dashboard;