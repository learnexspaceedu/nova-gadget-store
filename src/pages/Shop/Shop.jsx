import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import { products, categories } from "../../data/products.js";
import "./Shop.css";

function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");

  // Keep URL in sync when category changes (so links like /shop?category=gaming work).
  useEffect(() => {
    if (activeCategory === "all") setSearchParams({});
    else setSearchParams({ category: activeCategory });
  }, [activeCategory, setSearchParams]);

  // Filter + sort using array methods (.filter, .sort).
  let visible = products.filter((p) => {
    const matchCat = activeCategory === "all" || p.category === activeCategory;
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  if (sort === "price-asc") visible = [...visible].sort((a, b) => a.price - b.price);
  if (sort === "price-desc") visible = [...visible].sort((a, b) => b.price - a.price);
  if (sort === "rating") visible = [...visible].sort((a, b) => b.rating - a.rating);

  return (
    <section className="section">
      <div className="container">
        <header className="shop-header">
          <h1 className="section-title">Shop All Products</h1>
          <p className="section-subtitle">
            {visible.length} {visible.length === 1 ? "product" : "products"} available
          </p>
        </header>

        <div className="shop-toolbar">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="shop-search"
          />
          <select
            className="shop-sort"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="default">Sort: Default</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>

        <div className="shop-filters">
          <button
            className={`filter-chip ${activeCategory === "all" ? "active" : ""}`}
            onClick={() => setActiveCategory("all")}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-chip ${activeCategory === cat.id ? "active" : ""}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {visible.length === 0 ? (
          <div className="empty-state">
            <h3>No products found</h3>
            <p>Try a different search or category.</p>
          </div>
        ) : (
          <div className="grid-products">
            {visible.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Shop;
