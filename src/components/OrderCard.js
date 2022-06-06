import styles from "./OrderCart.module.css";
import Container from "./Container";

const OrderAdminCard = ({ order }) => {
  return (
    <Container className={styles["order-card"]}>
      <h2>Order of: {order.date}</h2>
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
        <p>Status: {order.isCompleted ? "Completed" : "Not Completed"}</p>
      </div>
    </Container>
  );
};
export default OrderAdminCard;
