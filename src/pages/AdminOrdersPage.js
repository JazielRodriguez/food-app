import { useEffect, useState } from "react";
import Container from "../components/Container";
import { useSelector } from "react-redux";
import { Redirect } from "wouter";
import OrderAdminCard from "../components/OrderAdminCard";
import Loading from "../components/Loading";
import { useMediaQuery } from "react-responsive";
const AdminOrdersPage = () => {
  const isLogged = useSelector((state) => state.auth.isAuthenticated);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const isAdmin = userInfo.isAdmin;
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
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
      setIsLoading(false);
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
    return <p>This page is only available in the desktop site</p>;
  }
  return (
    <>
      <Container>
        {isLoading && <Loading />}
        {orders.length === 0 && !isLoading && <p>No orders yet</p>}
        {orders.length > 0 &&
          orders.map((order) => (
            <OrderAdminCard key={order._id} order={order} />
          ))}
      </Container>
    </>
  );
};
export default AdminOrdersPage;
