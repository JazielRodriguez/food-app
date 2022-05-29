import styles from "./Loading.module.css";

import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <div className={styles.loading}>
      <ReactLoading type="spin" color="#000" height={100} width={100} />
    </div>
  );
};
export default Loading;
