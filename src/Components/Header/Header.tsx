import React, { useState } from "react";

import Button, { ButtonTypes } from "../Button";
import { BurgerClosedIcon } from "../../Assets/icons";
import { CloseIcon } from "../../Assets/icons";
import { SearchIcon } from "../../Assets/icons/SearchIcon";
import styles from "../Header/Header.module.css";
import Menu from "./Menu";
import UserName from "../UserName/UserName";

const Header = () => {
  const [isOpened, setOpened] = useState(false);

  const onBurgerClick = () => {
    setOpened(!isOpened);
  };

  return (
    <div className={styles.container}>
      <Button
        title={isOpened ? <CloseIcon /> : <BurgerClosedIcon />}
        onClick={onBurgerClick}
        type={ButtonTypes.Primary}
        className={styles.burgerButton}
      />
      {isOpened && <Menu />}
      <div className={styles.rightblock}>
        <div className={styles.username}>
          <UserName username="Artem Malkin" />
        </div>
        <div className={styles.searchblock}>
        <SearchIcon />
        </div>
      </div>
    </div>
  );
};

export default Header;