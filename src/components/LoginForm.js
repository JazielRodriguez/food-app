/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, Redirect } from "wouter";
import Container from "./Container";
import styles from "./LoginForm.module.css";
import { authActions } from "../store/auth-state";
import validateRegister from "../utils/validateRegister";
const LoginForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
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
      console.log(false);
      return;
    }
    console.log(true);

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
  return (
    <>
      {redirect && <Redirect to="/" />}
      <Container>
        <form className={styles.form} onSubmit={submitHandler}>
          <div>
            <label htmlFor="name">
              Name: <span>*</span>
            </label>
            <input type="text" id="name" onChange={nameHandler} value={name} />
          </div>
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
          <div>
            <Link href="/log-in">
              <a>Log in instead</a>
            </Link>
            <button>Register</button>
          </div>
        </form>
      </Container>
    </>
  );
};
export default LoginForm;
