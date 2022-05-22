/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "wouter";
import Container from "./Container";
import styles from "./LoginForm.module.css";
import { authActions } from "../store/auth-state";
const LoginForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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
    const createUser = {
      name,
      email,
      password,
      confirmPassword,
    };
    const response = await fetch("http://localhost:8000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createUser),
    });
    const data = await response.json();
    console.log(data);
  };
  const loginHandler = () => {
    dispatch(authActions.setIsAuthenticated(true));
  };
  return (
    <Container>
      <form className={styles.form} onSubmit={submitHandler}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" onChange={nameHandler} value={name} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            onChange={emailHandler}
            value={email}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            onChange={passwordHandler}
            value={password}
          />
        </div>
        <div>
          <label htmlFor="passwordConfirm">Confirm Password:</label>
          <input
            type="password"
            id="passwordConfirm"
            onChange={confirmPasswordHandler}
            value={confirmPassword}
          />
        </div>
        <div>
          <Link href="/log-in">
            <a>Create account instead</a>
          </Link>
          <button onClick={loginHandler}>Register</button>
        </div>
      </form>
    </Container>
  );
};
export default LoginForm;
