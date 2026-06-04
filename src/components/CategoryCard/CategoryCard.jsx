import { Link } from "react-router-dom";
import "./CategoryCard.css";
import ArrowRightIcon from "../../assets/icons/ArrowRightIcon";

function CategoryCard({ category }) {
  return (
    <Link to={`/shop?category=${category.id}`} className="category-card">
      <div className="category-image">
        <img src={category.image} alt={category.name} loading="lazy" />
      </div>
      <div className="category-overlay">
        <h3>{category.name}</h3>
        <span className="category-cta">
          Shop now
          <ArrowRightIcon />
        </span>
      </div>
    </Link>
  );
}

export default CategoryCard;
