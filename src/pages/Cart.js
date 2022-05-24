import { useSelector } from "react-redux";
import CartList from "../components/CartList";
const Cart = () => {
  const cart = useSelector((state) => state.cart.cartItems);
  return (
    <div>
      <h1>Cart</h1>
      <CartList cart={cart} />
    </div>
  );
};
export default Cart;
