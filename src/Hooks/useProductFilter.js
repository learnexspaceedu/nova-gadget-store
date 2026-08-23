import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { products } from "../data/products.js";

export function useProductFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");

  // Keep URL in sync when category changes
  // useEffect(() => {
  //   if (activeCategory === "all") setSearchParams({});
  //   else setSearchParams({ category: activeCategory });
  // }, [activeCategory, setSearchParams]);
  useEffect(() => {
    const currentCategoryInURL = searchParams.get("category") || "all";

    if (activeCategory !== currentCategoryInURL) {
      // 1. Create a copy of the existing search params
      const newParams = new URLSearchParams(searchParams);

      // 2. Modify it directly using built-in methods
      if (activeCategory === "all") {
        newParams.delete("category"); // Built-in method to remove it
      } else {
        newParams.set("category", activeCategory); // Built-in method to update/add it
      }

      // 3. Update the URL state
      setSearchParams(newParams, { replace: true });
    }
  }, [activeCategory, setSearchParams]);

  // Filter and sort items
  let visibleProducts = products.filter((p) => {
    const matchCat = activeCategory === "all" || p.category === activeCategory;
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  if (sort === "price-asc")
    visibleProducts = [...visibleProducts].sort((a, b) => a.price - b.price);
  if (sort === "price-desc")
    visibleProducts = [...visibleProducts].sort((a, b) => b.price - a.price);
  if (sort === "rating")
    visibleProducts = [...visibleProducts].sort((a, b) => b.rating - a.rating);

  // Return values and control functions back to the UI component
  return {
    search,
    setSearch,
    sort,
    setSort,
    activeCategory,
    setActiveCategory,
    visibleProducts,
  };
}
