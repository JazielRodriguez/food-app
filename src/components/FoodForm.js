import styles from "./FoodForm.module.css";

import { useRef, useState, useEffect } from "react";
import { useLocation } from "wouter";
import { validateFood } from "../utils/validations";
import InvalidFormError from "../components/InvalidFormError.js";
const FoodForm = () => {
  // eslint-disable-next-line
  const [location, setLocation] = useLocation();
  const name = useRef();
  const price = useRef();
  const image = useRef();
  const [invalidForm, setInvalidForm] = useState(false);
  const submitHandler = async (e) => {
    e.preventDefault();
    const newFood = {
      name: name.current.value.trim(),
      price: price.current.value.trim(),
      image: image.current.value.trim(),
    };
    const registerIsValid = validateFood({
      name: name.current.value.trim(),
      price: price.current.value.trim(),
      image: image.current.value.trim(),
    });
    if (!registerIsValid) {
      setInvalidForm(true);
      return;
    }
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
    if (data.ok) {
      alert("Food inserted successfully");
      setLocation("/");
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setInvalidForm(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [invalidForm]);
  return (
    <>
      {invalidForm && <InvalidFormError />}
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
          <button style={{ cursor: "pointer" }}>Submit</button>
        </div>
      </form>
    </>
  );
};
export default FoodForm;
