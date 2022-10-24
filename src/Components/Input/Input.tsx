import React, { FC, ChangeEvent } from "react";
import classNames from "classnames";
//@ts-ignore
import styles from "./Input.module.css";
import { type } from "os";

export enum InputTypes {
  Default = "default",
  Disable = "disable",
  Error = "error",
}

type InputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
  title?: string;
  type: InputTypes;
};

const Input: FC<InputProps> = (props) => {
  const { value, onChange, placeholder, disabled, error, title } = props;
  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div>
      {title && <div className={styles.title}>{title}</div>}
      <input
        className={classNames(styles.input, { [styles.inputError]: error })}
        value={value}
        onChange={onChangeInput}
        placeholder={placeholder}
        disabled={disabled}
      />
      {error && <div className={styles.textError}>{error}</div>}
    </div>
  );
};

export default Input;
