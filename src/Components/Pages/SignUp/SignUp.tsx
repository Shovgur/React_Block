import styles from "./SignUp.module.css";
import React, { useState } from "react";
import Button, { ButtonTypes } from "../../Button";
import FormContainer from "../../FormContainer";
import Input from "../../Input";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../Redux/Reducer/authReducer";
import { PathNames } from "../Router/Router";
import { useNavigate, NavLink } from "react-router-dom";

const SignIn = () => {
  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onSingUp = () => {
    dispatch(
      registerUser({
        data: { username: password, password, email: login },
        callback: () => 
        navigate(PathNames.RegistrationConfrim,{
          state: {email: login},
        })
      })
    );
  };

  return (
    <FormContainer title={"Sign Up"}>
      <>
        <div className={styles.inputsContainer}>
          <Input
            title={"Name"}
            placeholder={"Your name"}
            value={name}
            onChange={(value: string) => setName(value)}
          />
          <Input
            title={"Email"}
            placeholder={"Your email"}
            value={login}
            onChange={(value: string) => setLogin(value)}
          />
          <Input
            title={"Password"}
            placeholder={"Your password"}
            value={password}
            onChange={(value: string) => setPassword(value)}
          />
          <Input
            title={"Confirm Password"}
            placeholder={"Confirm password"}
            value={passwordConfirmation}
            onChange={(value: string) => setPasswordConfirmation(value)}
          />
        </div>

        <Button
          title={"Sign Up"}
          type={ButtonTypes.Primary}
          onClick={onSingUp}
          className={styles.button}
        />

        <div className={styles.signUpRedirectContainer}>
          {"Already have an account?"}
          <NavLink to={PathNames.SignIn} className={styles.redirectButton}>
            {"Sign Up"}
          </NavLink>
        </div>
      </>
    </FormContainer>
  );
};

export default SignIn;
