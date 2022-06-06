import styles from "./OrderCart.module.css";
import Container from "./Container";
const OrderCard = ({ order, isAdmin }) => {
  return (
    <Container className={styles["order-card"]}>
      {isAdmin ? (
        <h2>Order by: {order.name}</h2>
        ) : (
        <h2>Order of: {order.date}</h2>
      )}
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
      <div>{isAdmin && <button>Mark as completed</button>}</div>
      <p>{order.isCompleted ? "Completed" : "Not completed"}</p>
    </Container>
  );
};
export default OrderCard;
