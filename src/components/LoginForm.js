/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from "./LoginForm.module.css";

import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "wouter";
import useLocation from "wouter/use-location";

import RegisterAdvice from "./RegisterAdvice";
import Container from "./Container";
import InformationForm from "./InformationForm";
import InvalidFormError from "./InvalidFormError";
import { authActions } from "../store/auth-state";
import { validateRegister, validateLogin } from "../utils/validateRegister";

const LoginForm = ({ login }) => {
  // eslint-disable-next-line
  const [location, setLocation] = useLocation();
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const dispatch = useDispatch();
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [invalidForm, setInvalidForm] = useState(false);
  const [informationAboutForm, setInformationAboutForm] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    const registerIsValid = validateRegister({
      name: name.current.value,
      email: email.current.value,
      password: password.current.value,
      confirmPassword: confirmPassword.current.value,
    });
    if (!registerIsValid) {
      setInvalidForm(true);
      return;
    }
    const response = await fetch(
      "http://localhost:8000/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.current.value.trim(),
          email: email.current.value.trim(),
          password: password.current.value.trim(),
          confirmPassword: confirmPassword.current.value.trim(),
        }),
      }
    );
    const data = await response.json();
    if (data.ok) {
      setLocation("/log-in");
      setRegisterSuccess(true);
      return;
    }
    alert(data.message);
  };
  const submitHandlerForLogin = async (e) => {
    e.preventDefault();
    const loginIsValid = validateLogin({
      email: email.current.value.trim(),
      password: password.current.value.trim(),
    });
    if (!loginIsValid) {
      setInvalidForm(true);
      return;
    }

    const response = await fetch(
      "http://localhost:8000/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.current.value.trim(),
          password: password.current.value.trim(),
        }),
      }
    );
    const data = await response.json();
    if (data.loginStatus.ok) {
      dispatch(authActions.setIsAuthenticated(true));
      localStorage.setItem("userInfo", JSON.stringify(data.userInfo));
      localStorage.setItem("token", data.accessToken);
      setLocation("/");
      return;
    }
    alert(data.loginStatus.message);
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
      {informationAboutForm && (
        <InformationForm closeHandler={setInformationAboutForm} />
      )}

      {registerSuccess && <RegisterAdvice message={"Yeah"} />}
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
              <input type="text" id="name" ref={name} />
            </div>
          )}
          <div>
            <label htmlFor="email">
              Email: <span>*</span>
            </label>
            <input type="email" id="email" ref={email} />
          </div>
          <div>
            <label htmlFor="password">
              Password: <span>*</span>
            </label>
            <input type="password" id="password" ref={password} />
          </div>
          {!login && (
            <div>
              <label htmlFor="passwordConfirm">
                Confirm Password: <span>*</span>
              </label>
              <input
                type="password"
                id="passwordConfirm"
                ref={confirmPassword}
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
