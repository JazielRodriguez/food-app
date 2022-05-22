import styles from "./MobileMenu.module.css";
import Nav from "./Nav";
import { ImCross } from "react-icons/im";
import { IconContext } from "react-icons/lib";
const MobileMenu = ({ mobileMenuHandler, isLogged }) => {
  return (
    <div className={styles["mobile-menu"]}>
      <div className={styles["mobile-menu-btn"]} onClick={mobileMenuHandler}>
        <IconContext.Provider value={{ size: "2rem" }}>
          <ImCross />
        </IconContext.Provider>
      </div>
      <div className={styles["mobile-menu-content"]}>
        <Nav isLogged={isLogged} />
      </div>
    </div>
  );
};
export default MobileMenu;
