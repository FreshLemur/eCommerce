import { useEffect, useState } from "react";
import fetchCategories from "../services/api/categoriesAPI";

const useCategories = () => {
  const [categoriesData, setCategoriesData] = useState();

  useEffect(() => {
    async function getCategories() {
      try {
        const data = await fetchCategories();
        setCategoriesData(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }
    getCategories();
  }, []);

  return categoriesData;
};

export default useCategories;
