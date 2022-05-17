/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "wouter";
const SecondNav = () => {
  return (
    <nav>
      <Link href="/menu">
        <a>Menu</a>
      </Link>
      <Link href="/register">
        <a>Register</a>
      </Link>
    </nav>
  );
};
const Nav = ({ isTabletOrDesktop, isLogged }) => {
  let content = <SecondNav />;
  if (isLogged) {
    content = <p>Yep</p>;
  }
  return (
    <>
      <Link href="/">
        <a>
          <h2>Food App</h2>
        </a>
      </Link>
      {isTabletOrDesktop && content}
    </>
  );
};
export default Nav;
