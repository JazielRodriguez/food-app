import styles from "./InformationForm.module.css";

const InformationForm = ({ closeHandler }) => {
  return (
    <div className={styles["information-error-bg"]}>
      <div className={styles["information-error"]}>
        <p onClick={() => closeHandler(false)}>Exit</p>
        <p>
          In the <strong>Name</strong> field you have to enter your name
        </p>
        <p>
          In the <strong>Email</strong> field you have to enter a valid email
          address, example: <strong>test@test.com</strong>
        </p>
        <p>
          In the <strong>Password</strong> field you have to enter a valid
          password at least 6 characters long{" "}
        </p>
      </div>
    </div>
  );
};
export default InformationForm;
