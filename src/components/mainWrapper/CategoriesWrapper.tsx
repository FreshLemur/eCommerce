import styles from "../../assets/css/mainWrapper.module.css";
import useCategories from "../../hooks/useCategories";

const CategoriesWrapper = () => {
  const categoriesData = useCategories();
  console.log(categoriesData);

  return <div>123</div>;
};
export default CategoriesWrapper;
