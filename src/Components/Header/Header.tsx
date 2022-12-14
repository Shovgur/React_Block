import React, { useState } from "react";

import Button, { ButtonTypes } from "../Button";
import { BurgerClosedIcon } from "../../Assets/icons";
import { CloseIcon } from "../../Assets/icons";
import { SearchIcon } from "../../Assets/icons/SearchIcon";
import { LogInIcon } from "../../Assets/icons/LogInIcon";
import styles from "../Header/Header.module.css";
import Menu from "./Menu";
import UserName from "../UserName/UserName";
import Input from "../Input";
import authSelector from "../../Redux/Selectors/authSelector";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PathNames } from "../Pages/Router/Router";

const Header = () => {
  const [isOpened, setOpened] = useState(false);

  const onBurgerClick = () => {
    setOpened(!isOpened);
  };

  const navigate = useNavigate();
  const onLogInButton = () => {
    navigate(PathNames.SignIn);
  };

  const [isClickedSearch, setSearchClick] = useState(false);
  const clickedSearchButton = () => {
    setSearchClick(!isClickedSearch);
  };

  const [inputValue, setInputValue] = useState("");

  const onChange = (value: string) => {
    setInputValue(value);
  };

  const isLoggedIn = useSelector(authSelector.getLoggedIn);
  const userName = useSelector(authSelector.getUserName);

  return (
    <div className={styles.container}>
      <Button
        title={isOpened ? <CloseIcon /> : <BurgerClosedIcon />}
        onClick={onBurgerClick}
        type={ButtonTypes.Primary}
        className={styles.burgerButton}
      />
      {isOpened && <Menu />}
      <div className={styles.inputContainer}>
        {!isOpened && isClickedSearch && (
          <Input
            value={inputValue}
            onChange={onChange}
            placeholder={"Search..."}
            className={styles.customInput}
            type={"Search"}
          />
        )}
      </div>

      <div className={styles.searchButtons}>
        <Button
          title={<SearchIcon />}
          type={ButtonTypes.Primary}
          className={styles.searchButton}
          onClick={clickedSearchButton}
        />
        {isLoggedIn && !!UserName ? (
          <UserName username={userName} />
        ) : (
          <Button
            title={<LogInIcon />}
            type={ButtonTypes.Primary}
            className={styles.burgerButton}
            onClick={onLogInButton}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
