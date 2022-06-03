import Helmet from "react-helmet";
import Hero from "../components/Hero";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Food App</title>
      </Helmet>
      <Hero />
    </>
  );
};
export default HomePage;
