import { useState } from "react";

const useCategories = () => {
  const [categoriesData, setCategoriesData] = useState([
    {
      name: "Electronics",
      id: 1,
      imgSrc: "src/assets/img/categories-images/electronics.jpg",
    },
    {
      name: "Jewelry",
      id: 2,
      imgSrc: "src/assets/img/categories-images/jewelry.jpg",
    },
    {
      name: "Men's clothing",
      id: 3,
      imgSrc: "src/assets/img/categories-images/men's-clothing.jpg",
    },
    {
      name: "Women's clothing",
      id: 4,
      imgSrc: "src/assets/img/categories-images/women's-clothing.jpg",
    },
  ]);

  return categoriesData;
};

export default useCategories;
