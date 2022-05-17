import { Route } from "wouter";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import LogInPage from "./pages/LogInPage";
const App = () => {
  return (
    <>
      <Header />
      <Route path="/">
        <HomePage />
      </Route>
      <Route path="/menu">
        <MenuPage />
      </Route>
      <Route path="/log-in">
        <LogInPage />
      </Route>
    </>
  );
};
export default App;
