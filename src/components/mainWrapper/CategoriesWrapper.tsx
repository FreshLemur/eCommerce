import styles from "../../assets/css/mainWrapper.module.css";
import useCategoriesData from "../../hooks/useCategoriesData";

const CategoriesWrapper = () => {
  const categoriesData = useCategoriesData();
  console.log(categoriesData);

  if (!categoriesData) {
    return <div>No categories data available</div>;
  }

  return (
    <div className={styles.categoriesWrapper}>
      {categoriesData.map((category) => (
        <div key={category.id}>
          <h2>{category.name}</h2>
          <img src={category.imgSrc} alt={category.name} />
        </div>
      ))}
    </div>
  );
};

export default CategoriesWrapper;
