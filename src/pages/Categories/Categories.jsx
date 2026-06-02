import CategoryCard from "../../components/CategoryCard/CategoryCard.jsx";
import { categories } from "../../data/products.js";
import "./Categories.css";

function Categories() {
  return (
    <section className="section">
      <div className="container">
        <header className="categories-header">
          <h1 className="section-title">Browse Categories</h1>
          <p className="section-subtitle">
            Find the right gear for your needs — from immersive audio to pro-level gaming.
          </p>
        </header>
        <div className="grid-categories">
          {categories.map((c) => (
            <CategoryCard key={c.id} category={c} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
