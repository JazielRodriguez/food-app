import styles from './Cart.module.css'

import { useSelector } from "react-redux";

import CartList from "../components/CartList";
import Container from "../components/Container";
const Cart = () => {
  const cart = useSelector((state) => state.cart.cartItems);
  return (
    <div>
      <Container className={styles.cart}>
        <h1>Your Cart</h1>
      </Container>
      <CartList cart={cart} />
    </div>
  );
};
export default Cart;
