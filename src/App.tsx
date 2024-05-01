import { useState } from "react";
import "./App.css";
import styles from "./dark-theme.module.css";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? `${styles.darkTheme}` : `${styles.lightTheme}`}>
      <h1>My App</h1>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      <p>This is some content.</p>
    </div>
  );
};

export default App;
