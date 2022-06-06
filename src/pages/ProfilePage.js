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
      {userInfo.isAdmin && <p>You're admin</p>}
      {userInfo.isSuperAdmin && (
        <>
          <p>You're super admin too</p>
          <Link to="/admin/orders">View all admin orders</Link>
          <br />
          <Link to="/admin/new-food"> add new food</Link>
        </>
      )}
      <br />
      <Link to="/orders">View Orders</Link>
    </Container>
  );
};
export default ProfilePage;
