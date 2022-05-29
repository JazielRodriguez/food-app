/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from "./LoginForm.module.css";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, Redirect } from "wouter";

import Container from "./Container";
import InformationForm from "./InformationForm";
import InvalidFormError from "./InvalidFormError";
import { authActions } from "../store/auth-state";
import { validateRegister, validateLogin } from "../utils/validateRegister";

const LoginForm = ({ login }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [invalidForm, setInvalidForm] = useState(false);
  const [informationAboutForm, setInformationAboutForm] = useState(false);
  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const confirmPasswordHandler = (e) => {
    setConfirmPassword(e.target.value);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    const registerIsValid = validateRegister({
      name,
      email,
      password,
      confirmPassword,
    });
    if (!registerIsValid) {
      setInvalidForm(true);
      return;
    }
    const response = await fetch(
      "https://salty-shore-61790.herokuapp.com/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          confirmPassword,
        }),
      }
    );
    const data = await response.json();
    if (data.ok) {
      setRedirect(true);
      dispatch(authActions.setIsAuthenticated(true));
    }
  };
  const submitHandlerForLogin = async (e) => {
    e.preventDefault();
    const loginIsValid = validateLogin({ email, password });
    if (!loginIsValid) return;

    const response = await fetch("http://localhost:8000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await response.json();
    console.log(data);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setInvalidForm(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [invalidForm]);
  return (
    <>
      {invalidForm && (
        <InvalidFormError
          informationFormHandler={setInformationAboutForm}
          closeHandler={setInvalidForm}
        />
      )}
      {redirect && <Redirect to="/" />}
      {informationAboutForm && <InformationForm closeHandler={setInformationAboutForm}/>}
      <Container>
        <form
          className={styles.form}
          onSubmit={!login ? submitHandler : submitHandlerForLogin}
        >
          {!login && (
            <div>
              <label htmlFor="name">
                Name: <span>*</span>
              </label>
              <input
                type="text"
                id="name"
                onChange={nameHandler}
                value={name}
              />
            </div>
          )}
          <div>
            <label htmlFor="email">
              Email: <span>*</span>
            </label>
            <input
              type="email"
              id="email"
              onChange={emailHandler}
              value={email}
            />
          </div>
          <div>
            <label htmlFor="password">
              Password: <span>*</span>
            </label>
            <input
              type="password"
              id="password"
              onChange={passwordHandler}
              value={password}
            />
          </div>
          {!login && (
            <div>
              <label htmlFor="passwordConfirm">
                Confirm Password: <span>*</span>
              </label>
              <input
                type="password"
                id="passwordConfirm"
                onChange={confirmPasswordHandler}
                value={confirmPassword}
              />
            </div>
          )}
          <div>
            <Link href={!login ? "/log-in" : "/register"}>
              <a>{!login ? "Log in instead" : "Register"}</a>
            </Link>
            <button>Register</button>
          </div>
        </form>
      </Container>
    </>
  );
};
export default LoginForm;
