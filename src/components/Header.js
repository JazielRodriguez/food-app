/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import styles from "./Header.module.css";
import { Link } from "wouter";
import { useMediaQuery } from "react-responsive";
import Container from "./Container";
import MobileMenu from "./MobileMenu";
import Nav from "./Nav";
import { useSelector } from "react-redux";
const Header = () => {
  const isLogged = useSelector((state) => state.auth.isAuthenticated);
  const [mobileMenuIsVisible, setMobileMenuIsVisible] = useState(false);
  const mobileMenuHandler = () => {
    setMobileMenuIsVisible((prev) => !prev);
  };
  const isTabletOrDesktop = useMediaQuery({
    query: "(min-width: 768px)",
  });
  return (
    <header className={styles.header}>
      <Container className={styles["header-content"]}>
        <Link href="/">
          <a>
            <h2>Food App</h2>
          </a>
        </Link>
        {isTabletOrDesktop && <Nav isLogged={isLogged} />}
        {!isTabletOrDesktop && (
          <div
            className={styles["mobile-btn-menu"]}
            onClick={mobileMenuHandler}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}
        {mobileMenuIsVisible && (
          <MobileMenu
            mobileMenuHandler={mobileMenuHandler}
            isLogged={isLogged}
          />
        )}
      </Container>
    </header>
  );
};
export default Header;
