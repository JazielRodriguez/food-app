import styles from "./InvalidFormError.module.css";

const InvalidFormError = ({ closeHandler }) => {
  return (
    <div className={styles.error}>
      <p>
        Click here for more information
      </p>
      <p onClick={() => closeHandler(false)}>
        Please fill out all fields with <span>*</span> and make sure your
        passwords match.
      </p>
    </div>
  );
};
export default InvalidFormError;
