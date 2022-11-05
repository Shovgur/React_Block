import React, { FC, ReactElement } from "react";
import styles from "./FormContainer.module.css";
import classNames from "classnames";

type FormContainerProps = {
  title: string;
  children: ReactElement;
};

const FormContainer: FC<FormContainerProps> = ({ title, children }) => {
  return (
    <div className={styles.goBackButton}>
      {"Back to home"}
      {/*//ToDo - заменить на компонент Title*/}
      <div className={styles.title}>{title}</div>

      <div className={classNames(styles.container)}>
        <div className={styles.formContainer}>{children}</div>
      </div>
    </div>
  );
};
export default FormContainer;
