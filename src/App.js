import React, { Suspense } from "react";
import { Route } from "wouter";
import { Provider } from "react-redux";

import store from "./store/index";

import Header from "./components/Header";
import Loading from "./components/Loading";

import HomePage from "./pages/HomePage";
const MenuPage = React.lazy(() => import("./pages/MenuPage"));
const RegisterPage = React.lazy(() => import("./pages/RegisterPage"));
const Cart = React.lazy(() => import("./pages/Cart"));
const NewFood = React.lazy(() => import("./pages/NewFood"));
const LogInPage = React.lazy(() => import("./pages/LogInPage"));

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Route path="/">
        <HomePage />
      </Route>
      <Suspense fallback={<Loading />}>
        <Route path="/menu">
          <MenuPage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/log-in">
          <LogInPage />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/admin/new-food">
          <NewFood />
        </Route>
      </Suspense>
    </Provider>
  );
};
export default App;
