import styles from "./CartList.module.css";

import FoodCartCard from "./FoodCartCard";
import Container from "./Container";

const CartList = ({ cart }) => {
  if (cart.length === 0) {
    return (
      <Container className={styles.cart}>
        <p>Your cart is empty</p>
      </Container>
    );
  }
  return (
    <Container className={styles["cart-list"]}>
      {cart.map((item) => (
        <FoodCartCard key={Math.random()} info={item} />
      ))}
    </Container>
  );
};
export default CartList;
