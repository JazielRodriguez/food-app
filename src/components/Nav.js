/* eslint-disable jsx-a11y/anchor-is-valid */
import NavItems from "./NavItems";

const Nav = ({ isLogged, mobileMenuHandler }) => {
  return (
    <nav>
      {!isLogged && <NavItems mobileMenuHandler={mobileMenuHandler} />}
      {isLogged && <NavItems isLogged mobileMenuHandler={mobileMenuHandler} />}
    </nav>
  );
};
export default Nav;
