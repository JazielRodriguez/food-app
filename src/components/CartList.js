import FoodCartCard from "./FoodCartCard";

const CartList = ({ cart }) => {
  return (
    <ul>
      {cart.map((item) => (
        <FoodCartCard key={Math.random()} info={item} />
      ))}
    </ul>
  );
};
export default CartList;
