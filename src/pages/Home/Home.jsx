import { Link } from "react-router-dom";
import Hero from "../../components/Hero/Hero.jsx";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import CategoryCard from "../../components/CategoryCard/CategoryCard.jsx";
import { products, categories } from "../../data/products.js";
import "./Home.css";
import ArrowRightIcon from "../../assets/icons/ArrowRightIcon.jsx";

function Home() {
  // Featured = first 4 products (simple slice, beginner friendly).
  const featured = products.slice(0, 4);
  const previewCategories = categories.slice(0, 4);

  return (
    <>
      <Hero />

      {/* Featured Products */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <h2 className="section-title">Featured Products</h2>
              <p className="section-subtitle">
                Hand-picked best sellers this week.
              </p>
            </div>
            <Link to="/shop" className="link-accent">
              View all
              <ArrowRightIcon />
            </Link>
          </div>
          <div className="grid-products">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories preview */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <div>
              <h2 className="section-title">Shop by Category</h2>
              <p className="section-subtitle">
                Find exactly what you're looking for.
              </p>
            </div>
            <Link to="/categories" className="link-accent">
              All categories
              <ArrowRightIcon />
            </Link>
          </div>
          <div className="grid-categories-preview">
            {previewCategories.map((c) => (
              <CategoryCard key={c.id} category={c} />
            ))}
          </div>
        </div>
      </section>

      {/* Promo banner */}
      <section className="section">
        <div className="container">
          <div className="promo-banner">
            <div className="promo-text">
              <span className="hero-badge">
                <span className="dot" /> Limited Time
              </span>
              <h2>
                Save up to <span className="text-accent">40%</span> on Gaming
                Gear
              </h2>
              <p>Upgrade your setup with our biggest sale of the season.</p>
              <Link to="/shop?category=gaming" className="btn-primary">
                Shop Gaming
              </Link>
            </div>
            <div className="promo-image">
              <img
                src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=900"
                alt="Gaming setup promotional banner"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product highlights */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <h2 className="section-title">New Arrivals</h2>
              <p className="section-subtitle">
                Fresh drops from our latest collection.
              </p>
            </div>
          </div>
          <div className="grid-products">
            {products.slice(4, 8).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
