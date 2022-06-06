import { useState, useEffect } from "react";
import Container from "../components/Container";
import OrderCard from "../components/OrderCard";
const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [Loading, setLoading] = useState(true);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const isAdmin = userInfo.isAdmin;
  useEffect(() => {
    const getYourOrders = async () => {
      const response = await fetch(
        "https://salty-shore-61790.herokuapp.com/food/orders",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data = await response.json();
      const userEmail = JSON.parse(localStorage.getItem("userInfo")).email;
      const orders = data.filter((order) => order.email === userEmail);
      setLoading(false);
      setOrders(orders);
    };
    getYourOrders();
  }, []);
  console.log(orders);
  return (
    <>
      {Loading && (
        <Container>
          <h1>Loading...</h1>
        </Container>
      )}
      {orders.length === 0 && !Loading ? (
        <Container>
          <h1>You don't have any orders yet</h1>
        </Container>
      ) : (
        orders.map((order) => (
          <OrderCard order={order} isAdmin={isAdmin} key={order._id} />
        ))
      )}
    </>
  );
};
export default Orders;
