/* eslint-disable jsx-a11y/anchor-is-valid */
import NavItems from "./NavItems";
const Nav = ({ isLogged }) => {
  return (
    <nav>
      {!isLogged && <NavItems />}
      {isLogged && <NavItems isLogged />}
    </nav>
  );
};
export default Nav;
