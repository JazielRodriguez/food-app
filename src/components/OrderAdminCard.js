import styles from "./OrderCart.module.css";
import Container from "./Container";
import { useState } from "react";
const OrderAdminCard = ({ order }) => {
  const [orderIsCompleted, setOrderIsCompleted] = useState(order.isCompleted);
  const completeHandler = async () => {
    const response = await fetch(`http://localhost:8000/food/update-order`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        orderId: order._id,
        isCompleted: true,
      }),
    });
    const data = await response.json();
    if (data.ok) {
      setOrderIsCompleted(true);
    }
  };
  return (
    <Container className={styles["order-card"]}>
      <h2>Order by: {order.name}</h2>
      <div className={styles["order-items"]}>
        {order.cartItems.map((cartItem) => (
          <div key={cartItem.id} className={styles["order-item"]}>
            <div className={styles["order-image"]}>
              <img src={cartItem.image} alt={cartItem.name} />
            </div>
            <div>
              <h3>{cartItem.name}</h3>
              <p>$ {cartItem.price}</p>
              <p>Quantity: {cartItem.quantity}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        {!orderIsCompleted && (
          <button onClick={completeHandler}>Mark as completed</button>
        )}
        <p>Status: {orderIsCompleted ? "Completed" : "Not Completed"}</p>
      </div>
    </Container>
  );
};
export default OrderAdminCard;
