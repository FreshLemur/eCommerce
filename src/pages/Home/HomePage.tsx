import Header from "../../components/Header";

const HomePage = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

export default HomePage;

// import { useState } from "react";
// import styles from "../../assets/css/theme.module.css";

// const [darkMode, setDarkMode] = useState(false);

// const toggleDarkMode = () => {
//   setDarkMode(!darkMode);
// };

//   return (
//     <div className={darkMode ? `${styles.darkTheme}` : `${styles.lightTheme}`}>
//       <h1>My App</h1>
//       <button
//         className={
//           darkMode ? `${styles.darkThemeButton}` : `${styles.lightThemeButton}`
//         }
//         onClick={toggleDarkMode}
//       >
//         Toggle Dark Mode
//       </button>
//       <p>This is some content.</p>
//     </div>
//   );
// };
