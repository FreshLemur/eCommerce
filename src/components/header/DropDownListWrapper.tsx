import React, { useState } from "react";
import DropDown from "./DropDown";
import styles from "../../assets/css/header.module.css";

const Menu: React.FC = (): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [selectTheme, setSelectTheme] = useState<string>("Light");
  const themes = () => {
    return ["Dark", "Light"];
  };

  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  const dismissHandler = (event: React.MouseEvent<HTMLButtonElement>): void => {
    if (event.currentTarget === event.target) {
      setShowDropDown(false);
    }
  };

  const themeSelection = (theme: string): void => {
    setSelectTheme(theme);
  };

  return (
    <>
      <button
        className={showDropDown ? "active" : undefined}
        id={styles.showDropDownButton}
        onMouseEnter={(): void => toggleDropDown()}
        onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>): void =>
          dismissHandler(e)
        }
      >
        <div>{selectTheme ? "Theme: " + selectTheme : "Theme ..."} </div>
        {showDropDown && (
          <DropDown
            themes={themes()}
            showDropDown={false}
            toggleDropDown={(): void => toggleDropDown()}
            themeSelection={themeSelection}
          />
        )}
      </button>
    </>
  );
};

export default Menu;
