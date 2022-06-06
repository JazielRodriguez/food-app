import { useEffect, useState } from "react";
import Container from "../components/Container";
import { useSelector } from "react-redux";
import { Redirect } from "wouter";
import OrderAdminCard from "../components/OrderAdminCard";
import { useMediaQuery } from "react-responsive";
const AdminOrdersPage = () => {
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

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  let content;
  if (!isLogged) {
    content = <Redirect to="/log-in" />;
  }
  if (!isAdmin) {
    content = <p>you aren't a admin</p>;
  }
  if (!isDesktopOrLaptop) {
    content = <p>This page is only available in the desktop site</p>;
  }
  if (orders.length === 0) {
    content = <p>No orders yet</p>;
  }
  return (
    <>
      <Container>
        {content}
        {orders.length > 0 &&
          orders.map((order) => (
            <OrderAdminCard key={order._id} order={order} />
          ))}
      </Container>
    </>
  );
};
export default AdminOrdersPage;
