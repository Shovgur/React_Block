hw-6
//@ts-ignore
=======
import React, { FC, ReactElement } from "react";
 main
import styles from "./FormContainer.module.css";
import React, { FC, ReactElement } from "react";
import classNames from "classnames";
import { useThemeContext } from "../../Context/ThemeContext";
import { Theme } from "../../Constants/@types";

type FormContainerProps = {
  title: string;
  children: ReactElement;
};

const FormContainer: FC<FormContainerProps> = ({ title, children }) => {
  const { theme } = useThemeContext();
  return (
 hw-6
    <div
      className={classNames(styles.container, {
        [styles.darkContainer]: theme === Theme.Dark,
      })}
    >
      <div>
        <div className={styles.goBackButton}>{"Back to home"}</div>
        <div>{title}</div>

    <div className={styles.goBackButton}>
      <div className={styles.goBackButton}>Back to home</div>
      {/*//ToDo - заменить на компонент Title*/}
      <div className={styles.title}>{title}</div>

      <div className={classNames(styles.container)}>
        <div className={styles.formContainer}>{children}</div>
main
      </div>
      <div className={styles.formContainer}>{children}</div>
    </div>
  );
};
export default FormContainer;