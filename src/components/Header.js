/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from "./Header.module.css";
import { useMediaQuery } from "react-responsive";
import { Link } from "wouter";
import Container from "./Container";
const Header = () => {
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
        {isTabletOrDesktop && (
          <nav>
            <Link href="/menu">
              <a>Menu</a>
            </Link>
            <Link href="/log-in">
              <a>Log In</a>
            </Link>
          </nav>
        )}
        {!isTabletOrDesktop && (
          <div className={styles['mobile-btn-menu']}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}
      </Container>
    </header>
  );
};
export default Header;
