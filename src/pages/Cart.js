import styles from "./Cart.module.css";

import { useSelector } from "react-redux";

import CartList from "../components/CartList";
import Container from "../components/Container";
const Cart = () => {
  const cart = useSelector((state) => state.cart.cartItems);
  let content = <h1>Your Cart</h1>;
  if (cart.length > 0) {
    content = (
      <div>
        <h1>Your Cart</h1>
        <p>Delete</p>
      </div>
    );
  }
  return (
    <div>
      <Container className={styles.cart}>{content}</Container>
      <CartList cart={cart} />
    </div>
  );
};
export default Cart;
