import { Route } from "wouter";
import { Provider } from "react-redux";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import RegisterPage from "./pages/RegisterPage";
import store from "./store/index";
import Cart from "./pages/Cart";
import NewFood from "./pages/NewFood";
const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Route path="/">
        <HomePage />
      </Route>
      <Route path="/menu">
        <MenuPage />
      </Route>
      <Route path="/register">
        <RegisterPage />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
      <Route path="/admin/new-food">
        <NewFood />
      </Route>
    </Provider>
  );
};
export default App;
