import styles from "./FoodCard.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-state";
const FoodCard = ({ info }) => {
  const dispatch = useDispatch();
  const addItemToCart = (item) => {
    console.log(item);
    dispatch(cartActions.addItem(item));
  };
  return (
    <li className={styles["food-card"]}>
      <div className={styles["cover-img"]}>
        <img src={info.image} alt={info.name} />
      </div>
      <div>
        <div>
          <h3>{info.name}</h3>
          <p>$ {info.price}</p>
        </div>
        <button
          onClick={() => {
            addItemToCart(info);
          }}
        >
          Add to Cart
        </button>
      </div>
    </li>
  );
};
export default FoodCard;
