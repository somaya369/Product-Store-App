import SettingsPanel from "../components/settings/SettingsPanel";
import ProductList from "../components/product/ProductList";
const Home = () => {
    return (
        <main className="page">
            <SettingsPanel />
            <ProductList />
        </main>
    );
};
export default Home;