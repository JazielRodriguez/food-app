import styles from "./FoodList.module.css";
import { useState, useEffect } from "react";
import FoodCard from "./FoodCard";
// import pizza from "../assets/pizza.jpeg";
// import burger from "../assets/burger.jpeg";
// import pasta from "../assets/pasta.jpeg";
const FoodList = () => {
  const [foods, setFoods] = useState([]);
  // const foods = [
  //   {
  //     id: 1,
  //     name: "Pizza",
  //     price: "10",
  //     image: pizza,
  //   },
  //   {
  //     id: 2,
  //     name: "Burger",
  //     price: "15",
  //     image: burger,
  //   },
  //   {
  //     id: 3,
  //     name: "Pasta",
  //     price: "20",
  //     image: pasta,
  //   },
  // ];
  useEffect(() => {
    const fetchFood = async () => {
      const response = await fetch(
        "https://salty-shore-61790.herokuapp.com/food/all-foods",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setFoods(data);
    };
    fetchFood();
  }, []);
  return (
    <ul className={styles["food-list"]}>
      {foods.map((food) => (
        <FoodCard key={food.id} info={food} />
      ))}
    </ul>
  );
};
export default FoodList;
