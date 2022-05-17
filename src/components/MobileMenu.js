import styles from "./MobileMenu.module.css";
const MobileMenu = () => {
  return (
    <div className={styles["mobile-menu"]}>
      <div className={styles["mobile-menu-content"]}>
        <p>Visible</p>
      </div>
    </div>
  );
};
export default MobileMenu;
