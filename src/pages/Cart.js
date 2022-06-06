import styles from "./Cart.module.css";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { cartActions } from "../store/cart-state";
import CartList from "../components/CartList";
import Container from "../components/Container";
const Cart = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.auth.isAuthenticated);
  const cart = useSelector((state) => state.cart.cartItems);

  const deleteCartItemsHandler = () => {
    dispatch(cartActions.deleteCartItems());
  };
  const orderHandler = async () => {
    if (cart && cart.length > 0) {
      const response = await fetch(
        "https://salty-shore-61790.herokuapp.com/food/new-order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            userInfo: localStorage.getItem("userInfo"),
            cartItems: cart,
          }),
        }
      );
      const data = await response.json();
      console.log(data);
      alert(data.message);
      return;
    }
  };

  let content = <h1>Your Cart</h1>;
  if (cart.length > 0) {
    content = (
      <div>
        <h1>Your Cart</h1>
        <p onClick={deleteCartItemsHandler}>Delete all your cart items</p>
      </div>
    );
  }
  return (
    <div>
      <Container className={styles.cart}>{content}</Container>
      <CartList cart={cart} />
      {!isLogged && cart.length > 0 && (
        <Container>
          <p className="order-btn">You have to log in to make an order</p>
        </Container>
      )}
      {isLogged && cart.length > 0 && (
        <Container>
          <button
            className="order-btn"
            onClick={() => {
              orderHandler();
              deleteCartItemsHandler();
            }}
          >
            Order
          </button>
        </Container>
      )}
    </div>
  );
};
export default Cart;
