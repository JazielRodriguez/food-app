import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "wouter";
import OrderCard from "../components/OrderCard";
import { useMediaQuery } from "react-responsive";
const AdminOrdersPage = () => {
  const isLogged = useSelector((state) => state.auth.isAuthenticated);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const isAdmin = userInfo.isAdmin;
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const getAllOrders = async () => {
      const response = await fetch("http://localhost:8000/food/orders", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await response.json();
      setOrders(data);
    };
    getAllOrders();
  }, []);

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  if (!isLogged) {
    return <Redirect to="/log-in" />;
  }
  if (!isAdmin) {
    return <p>you aren't a admin</p>;
  }
  if (!isDesktopOrLaptop) {
    return (
      <div>
        <p>This page is only available in the desktop site</p>
      </div>
    );
  }
  return (
    <>
      <p>Orders</p>
      {orders.map((order) => (
        <OrderCard key={order._id} order={order} />
      ))}
    </>
  );
};
export default AdminOrdersPage;
