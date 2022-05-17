import styles from "./MobileMenu.module.css";
import Nav from './Nav';
const MobileMenu = () => {
  return (
    <div className={styles["mobile-menu"]}>
      <div className={styles["mobile-menu-content"]}>
	<Nav />
	  </div>
    </div>
  );
};
export default MobileMenu;
