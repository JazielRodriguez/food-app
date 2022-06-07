import styles from "./FoodList.module.css";
import { useState, useEffect } from "react";
import Loading from "./Loading";
import FoodCard from "./FoodCard";
const FoodList = () => {
  const [foods, setFoods] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
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
      setIsLoading(false);
      setFoods(data);
    };
    fetchFood();
  }, []);
  return (
    <>
      {isLoading && <Loading />}
      <ul className={styles["food-list"]}>
        {foods.map((food) => (
          <FoodCard key={food.id} info={food} />
        ))}
      </ul>
    </>
  );
};
export default FoodList;
