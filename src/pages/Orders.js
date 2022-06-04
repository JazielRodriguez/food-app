import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "wouter";

const Orders = () => {
  const isLogged = useSelector((state) => state.auth.isAuthenticated);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const isAdmin = userInfo.isAdmin;
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const getAllOrders = async () => {
      const response = await fetch(
        "https://salty-shore-61790.herokuapp.com/food/orders",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data = await response.json();
      setOrders(data);
    };
    getAllOrders();
  }, []);

  if (!isLogged) {
    return <Redirect to="/log-in" />;
  }
  if (!isAdmin) {
    return <p>you aren't a admin</p>;
  }

  return (
    <>
      <p>Orders</p>
      {orders.map((order) => (
        <h1 key={order._id}>{order._id}</h1>
      ))}
    </>
  );
};
export default Orders;
