import styles from "./FoodCartCard.module.css";

import { useDispatch } from "react-redux";

import { cartActions } from "../store/cart-state";
const FoodCartCard = ({ info }) => {
  const dispatch = useDispatch();
  const deleteItemFromCart = (item) => {
    dispatch(cartActions.deleteItem(item));
  };
  const addItemToCart = (item) => {
    dispatch(cartActions.addItem(item));
  };
  return (
    <div className={styles["food-cart-card"]}>
      <div>
        <img src={info.image} alt={info.name} />
      </div>
      <div className={styles["info-food"]}>
        <div className={styles.info}>
          <h3>{info.name}</h3>
          <p>$ {info.price}</p>
        </div>
        <div className={styles.actions}>
          <button onClick={() => deleteItemFromCart(info)}>-</button>
          <p>{info.quantity}</p>
          <button onClick={() => addItemToCart(info)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCartCard;
