import React, { useEffect, useState } from "react";
import styles from "../../assets/css/header.module.css";

type DropDownProps = {
  themes: string[];
  showDropDown: boolean;
  toggleDropDown: Function;
  themeSelection: Function;
};

const DropDown: React.FC<DropDownProps> = ({
  themes,
  themeSelection,
}: DropDownProps): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  const onClickHandler = (theme: string): void => {
    themeSelection(theme);
  };

  useEffect(() => {
    setShowDropDown(showDropDown);
  }, [showDropDown]);

  return (
    <>
      <div className={showDropDown ? `${styles.dropdown}` : "dropdown active"}>
        {themes.map((theme: string, index: number): JSX.Element => {
          return (
            <p
              key={index}
              onClick={(): void => {
                onClickHandler(theme);
              }}
            >
              {theme}
            </p>
          );
        })}
      </div>
    </>
  );
};

export default DropDown;
