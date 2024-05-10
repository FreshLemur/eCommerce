import styles from "../../assets/css/mainWrapper.module.css";
import CategoriesWrapper from "./CategoriesWrapper";

const MainWrapper = () => {
  return (
    <main className={styles.MainWrapper}>
      <h1 className={styles.categoriesTitle}>Categories:</h1>
      <CategoriesWrapper />
    </main>
  );
};
export default MainWrapper;
