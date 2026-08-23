import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import { products, categories } from "../../data/products.js";
import "./Shop.css";
import { useProductFilter } from "../../Hooks/useProductFilter.js";

function Shop() {
  const {
    search,
    setSearch,
    sort,
    setSort,
    activeCategory,
    setActiveCategory,
    visibleProducts,
  } = useProductFilter();

  return (
    <section className="section">
      <div className="container">
        <header className="shop-header">
          <h1 className="section-title">Shop All Products</h1>
          <p className="section-subtitle">
            {visibleProducts.length}{" "}
            {visibleProducts.length === 1 ? "product" : "products"} available
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

        {visibleProducts.length === 0 ? (
          <div className="empty-state">
            <h3>No products found</h3>
            <p>Try a different search or category.</p>
          </div>
        ) : (
          <div className="grid-products">
            {visibleProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Shop;
