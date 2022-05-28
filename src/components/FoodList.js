import styles from './FoodList.module.css';

import FoodCard from "./FoodCard";
import pizza from "../assets/pizza.jpeg";
import burger from "../assets/burger.jpeg";
import pasta from "../assets/pasta.jpeg";
const FoodList = () => {
  const foods = [
    {
      id: 1,
      name: "Pizza",
      price: "10",
      image: pizza,
    },
    {
      id: 2,
      name: "Burger",
      price: "15",
      image: burger,
    },
    {
      id: 3,
      name: "Pasta",
      price: "20",
      image: pasta,
    },
  ];
  return (
    <ul className={styles['food-list']}>
      {foods.map((food) => (
        <FoodCard key={food.id} info={food} />
      ))}
    </ul>
  );
};
export default FoodList;
