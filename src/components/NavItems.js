/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "wouter";
import { useDispatch } from "react-redux";

import { authActions } from "../store/auth-state";

const NavItems = ({ isLogged, mobileMenuHandler }) => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(authActions.setIsAuthenticated(false));
  };

  return (
    <>
      <Link href="/menu" onClick={mobileMenuHandler}>
        <a>Menu</a>
      </Link>
      <Link href="/cart" onClick={mobileMenuHandler}>
        <a>Cart</a>
      </Link>
      {isLogged ? (
        <>
          <Link href="/profile" onClick={mobileMenuHandler}>
            <a>Profile</a>
          </Link>
          <Link
            href="/"
            onClick={() => {
              logoutHandler();
              mobileMenuHandler();
            }}
          >
            <a>Log Out</a>
          </Link>
        </>
      ) : (
        <Link href="/register" onClick={mobileMenuHandler}>
          <a>Register</a>
        </Link>
      )}
    </>
  );
};

export default NavItems;
