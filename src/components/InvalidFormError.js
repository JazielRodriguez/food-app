import styles from "./InvalidFormError.module.css";

const InvalidFormError = ({ informationFormHandler, closeHandler }) => {
  const clickHandler = () => {
    informationFormHandler(true);
    closeHandler(false);
  };
  return (
    <div className={styles.error}>
      <p onClick={clickHandler}>Click here for more information</p>
      <p>
        Please fill out all fields with <span>*</span> and make sure your
        passwords match.
      </p>
    </div>
  );
};
export default InvalidFormError;
