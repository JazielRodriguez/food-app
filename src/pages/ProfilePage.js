import { useSelector } from "react-redux";
import { Redirect } from "wouter";
import useLocation from "wouter/use-location";
import Container from "../components/Container";
const ProfilePage = () => {
  // eslint-disable-next-line
  const [location, setLocation] = useLocation();
  const userInfo = useSelector((state) => state.user.userInfo);
  const isLogged = useSelector((state) => state.auth.isAuthenticated);
  return (
    <Container>
      {!isLogged && <Redirect to="/log-in/" />}
      <h1>Profile of {userInfo.name}</h1>
      {userInfo.isAdmin && <p>You're admin</p>}
      {userInfo.isSuperAdmin && <p>You're super admin too</p>}
    </Container>
  );
};
export default ProfilePage;
