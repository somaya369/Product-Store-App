import { useMemo, useState } from "react";
import { useProducts } from "../../hooks/useProducts";
import { useSettings } from "../../context/SettingsContext";
import { translations } from "../../i18n/translations";
import { categoryMap, translateProduct } from "../../i18n/productTranslations";
import ProductCard from "./ProductCard";
import Loader from "../ui/Loader";
import ErrorMessage from "../ui/ErrorMessage";
import Button from "../ui/Button";

const ProductList = () => {
  const { data: products, isLoading, isError, error } = useProducts();
  const { state } = useSettings();
  const t = translations[state.language];

  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [category, setCategory] = useState("all");
  const [page, setPage] = useState(1);

  const productsPerPage = 8;

  const categories = useMemo(() => {
    if (!products) return [];
    return ["all", ...new Set(products.map((product) => product.category))];
  }, [products]);

  const filteredProducts = useMemo(() => {
    if (!products) return [];

    let result = [...products];

    if (search.trim() !== "") {
      const searchText = search.toLowerCase();

      result = result.filter((product) => {
        const translatedProduct = translateProduct(product, state.language);

        return (
          product.title.toLowerCase().includes(searchText) ||
          product.category.toLowerCase().includes(searchText) ||
          translatedProduct.title.toLowerCase().includes(searchText) ||
          translatedProduct.category.toLowerCase().includes(searchText) ||
          translatedProduct.description.toLowerCase().includes(searchText)
        );
      });
    }

    if (category !== "all") {
      result = result.filter((product) => product.category === category);
    }

    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sortBy === "name-az") {
      result.sort((a, b) => {
        const aProduct = translateProduct(a, state.language);
        const bProduct = translateProduct(b, state.language);
        return aProduct.title.localeCompare(bProduct.title);
      });
    }

    if (sortBy === "name-za") {
      result.sort((a, b) => {
        const aProduct = translateProduct(a, state.language);
        const bProduct = translateProduct(b, state.language);
        return bProduct.title.localeCompare(aProduct.title);
      });
    }

    return result;
  }, [products, search, category, sortBy, state.language]);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const paginatedProducts = filteredProducts.slice(
    (page - 1) * productsPerPage,
    page * productsPerPage
  );

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setPage(1);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setPage(1);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    setPage(1);
  };

  if (isLoading) return <Loader text="Loading products..." />;
  if (isError) return <ErrorMessage message={error.message} />;

  return (
    <section>
      <div className="product-controls">
        <input
          type="text"
          placeholder={t.searchProducts}
          value={search}
          onChange={handleSearchChange}
        />

        <select value={category} onChange={handleCategoryChange}>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat === "all"
                ? t.allCategories
                : state.language === "fa"
                ? categoryMap[cat] || cat
                : cat}
            </option>
          ))}
        </select>

        <select value={sortBy} onChange={handleSortChange}>
          <option value="default">{t.defaultSort}</option>
          <option value="price-low">{t.priceLowToHigh}</option>
          <option value="price-high">{t.priceHighToLow}</option>
          <option value="name-az">{t.nameAToZ}</option>
          <option value="name-za">{t.nameZToA}</option>
        </select>
      </div>

      {filteredProducts.length === 0 ? (
        <p className="no-results">
          {state.language === "fa" ? "محصولی موجود نیست" : "No products found"}
        </p>
      ) : (
        <>
          <div className={state.view === "grid" ? "products-grid" : "products-list"}>
            {paginatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} view={state.view} />
            ))}
          </div>

          <div className="pagination">
            <Button
              onClick={() => setPage((prev) => prev - 1)}
              disabled={page === 1}
            >
              {state.language === "fa" ? "قبلی" : "Previous"}
            </Button>

            <span>
              {state.language === "fa" ? "صفحه" : "Page"} {page} / {totalPages}
            </span>

            <Button
              onClick={() => setPage((prev) => prev + 1)}
              disabled={page === totalPages}
            >
              {state.language === "fa" ? "بعدی" : "Next"}
            </Button>
          </div>
        </>
      )}
    </section>
  );
};

export default ProductList;