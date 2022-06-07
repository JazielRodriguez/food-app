import { useSelector } from "react-redux";
import { Link, Redirect } from "wouter";
import useLocation from "wouter/use-location";
import Container from "../components/Container";
const ProfilePage = () => {
  // eslint-disable-next-line
  const [location, setLocation] = useLocation();
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const isLogged = useSelector((state) => state.auth.isAuthenticated);
  if (!isLogged) {
    return <Redirect to="/log-in" />;
  }
  return (
    <Container>
      <h1>Profile of {userInfo.name}</h1>
      {userInfo.isSuperAdmin && (
        <>
          <Link to="/admin/orders">
            <div className="order-btn">
              <p>View all admin orders</p>
            </div>
          </Link>
          <Link to="/admin/new-food">
            <div className="order-btn">
              <p> Add new food</p>
            </div>
          </Link>
        </>
      )}
      <Link to="/orders">
        <div className="order-btn">
          <p>View Orders</p>
        </div>
      </Link>
    </Container>
  );
};
export default ProfilePage;
