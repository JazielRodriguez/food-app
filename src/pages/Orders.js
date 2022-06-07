import { useState, useEffect } from "react";
import Container from "../components/Container";
import Loading from "../components/Loading";
import OrderCard from "../components/OrderCard";
const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
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
      {loading && <Loading />}
      {orders.length === 0 && !loading ? (
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
