import { useState, useEffect } from "react";
import OrderCard from "../components/OrderCard";
const Orders = () => {
  const [orders, setOrders] = useState([]);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const isAdmin = userInfo.isAdmin;
  useEffect(() => {
    const getYourOrders = async () => {
      const response = await fetch("http://localhost:8000/food/orders", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await response.json();
      const userEmail = JSON.parse(localStorage.getItem("userInfo")).email;
      const orders = data.filter((order) => order.email === userEmail);
      setOrders(orders);
    };
    getYourOrders();
  }, []);
  console.log(orders);
  return (
    <>
      <h1>orders page</h1>
      {orders.map((order) => (
        <OrderCard order={order} isAdmin={isAdmin} key={order._id}/>
      ))}
    </>
  );
};
export default Orders;
