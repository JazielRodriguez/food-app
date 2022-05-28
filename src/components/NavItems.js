/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "wouter";
import { useDispatch } from "react-redux";

import { authActions } from "../store/auth-state";

const NavItems = ({ isLogged }) => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(authActions.setIsAuthenticated(false));
  };

  return (
    <>
      <Link href="/menu">
        <a>Menu</a>
      </Link>
      <Link href="/cart">
        <a>Cart</a>
      </Link>
      {isLogged ? (
        <Link href="/" onClick={logoutHandler}>
          <a>Log Out</a>
        </Link>
      ) : (
        <Link href="/register">
          <a>Register</a>
        </Link>
      )}
    </>
  );
};

export default NavItems;
