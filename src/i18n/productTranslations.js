export const categoryMap = {
  "men's clothing": "لباس مردانه",
  "women's clothing": "لباس زنانه",
  jewelery: "زیورآلات",
  electronics: "وسایل الکترونیکی",
};

export const translateProduct = (product, language) => {
  if (language !== "fa") return product;

  return {
    ...product,
    title: `محصول شماره ${product.id}`,
    description: "این محصول با کیفیت مناسب برای خرید آنلاین ارائه شده است.",
    category: categoryMap[product.category] || product.category,
  };
};