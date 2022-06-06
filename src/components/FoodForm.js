import styles from "./FoodForm.module.css";

import { useRef } from "react";

const FoodForm = () => {
  const name = useRef();
  const price = useRef();
  const image = useRef();
  const submitHandler = async (e) => {
    e.preventDefault();
    const newFood = {
      name: name.current.value.trim(),
      price: price.current.value.trim(),
      image: image.current.value.trim(),
    };
    const response = await fetch(
      "https://salty-shore-61790.herokuapp.com/food/new-food",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify(newFood),
      }
    );
    const data = await response.json();
    console.log(data);
  };
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" ref={name} />
      </div>
      <div>
        <label htmlFor="price">Price</label>
        <input type="number" id="price" ref={price} />
      </div>
      <div>
        <label htmlFor="image">URL image</label>
        <input type="text" id="image" ref={image} />
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
};
export default FoodForm;
