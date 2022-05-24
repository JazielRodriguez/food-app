import { useState } from "react";
import axios from "axios";
import styles from "./FoodForm.module.css";
const FoodForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState();
  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const priceHandler = (e) => {
    setPrice(e.target.value);
  };
  const descriptionHandler = (e) => {
    setDescription(e.target.value);
  };
  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(image);
    const formData = new FormData();
    formData.append("image", image);

    const newFood = {
      name,
      description,
      price,
      formData,
    };
    console.log(newFood);
    const response = await axios.post(
      "http://localhost:8000/admin/new-food",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log(response);
  };
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" value={name} onChange={nameHandler} />
      </div>
      <div>
        <label htmlFor="price">Price</label>
        <input type="text" id="price" value={price} onChange={priceHandler} />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={descriptionHandler}
        />
      </div>
      <div>
        <label htmlFor="image">Image</label>
        <input type="file" id="image" onChange={imageHandler} />
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
};
export default FoodForm;
