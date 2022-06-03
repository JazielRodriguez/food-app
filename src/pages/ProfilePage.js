import { useSelector } from 'react-redux';
import Container from '../components/Container';
const ProfilePage = () => {
  const userInfo = useSelector((state) => state.user.userInfo);
  return (
    <Container>
      <h1>Profile of {userInfo.name}</h1>
    </Container>
  );
};
export default ProfilePage;
