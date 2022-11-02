import React from "react";

import { MoonIcon } from "../../Assets/icons/MoonIcon";
import { SunIcon } from "../../Assets/icons/SunIcon";
//@ts-ignore
import styles from "./ThemeSwitcher.module.css";
import classNames from "classnames";
import { useThemeContext } from "../../Context/ThemeContext";
import { Theme } from "../../Constants/@types";

const ThemeSwitcher = () => {
  const { theme, onChangeTheme } = useThemeContext();

  return (
    <div className={styles.container}>
      <div
        className={classNames(styles.iconButton, {
          [styles.activeButton]: theme === Theme.Light,
        })}
        onClick={() => onChangeTheme(Theme.Light)}
      >
        <SunIcon />
      </div>
      <div
        className={classNames(styles.iconButton, {
          [styles.activeButton]: theme === Theme.Dark,
        })}
        onClick={() => onChangeTheme(Theme.Dark)}
      >
        <MoonIcon />
      </div>
    </div>
  );
};

export default ThemeSwitcher;
