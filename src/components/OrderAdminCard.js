import styles from "./OrderCart.module.css";
import Container from "./Container";
import { useState } from "react";
const OrderAdminCard = ({ order }) => {
  const [orderIsCompleted, setOrderIsCompleted] = useState(order.isCompleted);
  const completeHandler = async () => {
    const response = await fetch(
      `https://salty-shore-61790.herokuapp.com/food/update-order`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          orderId: order._id,
          isCompleted: true,
        }),
      }
    );
    const data = await response.json();
    if (data.ok) {
      setOrderIsCompleted(true);
    }
  };
  return (
    <Container className={styles["order-card"]}>
      <h2 style={{ marginBottom: ".5rem" }}>Order by: {order.name}</h2>
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
          <button
            onClick={completeHandler}
            className="order-btn"
            style={{ marginLeft: 0, background: "#dae6dd" }}
          >
            Mark as completed
          </button>
        )}
        <p style={{ marginTop: ".5rem" }}>
          <strong>Status:</strong>{" "}
          {orderIsCompleted ? "Completed" : "Not Completed"}
        </p>
      </div>
    </Container>
  );
};
export default OrderAdminCard;
