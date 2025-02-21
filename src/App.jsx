import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from "./landing/Navbar";
import Body from "./Body";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
import Login from "./_auth/forms/Login";
import Signup from "./_auth/forms/Signup";
import { Home, Support, About } from "./_root/pages/index";
import Docs from "./_docs/Docs";
import { Provider } from "react-redux";
import appStore from "./utils/store/store";
import { useAuthListener } from "./firebase/authMethods";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CategoryPage from "./_root/pages/CategoryPage";

const AuthRedirect = () => {
  useAuthListener();
};

const App = () => {
  return (
    <Provider store={appStore}>
      <ToastContainer position="top-right" autoClose={1500} />
      <BrowserRouter basename="/">
        <AuthRedirect /> {/* 🚀 Redirection Logic Runs Globally */}
        <Navbar />
        <Routes>
          <Route index path="/" element={<Body />} />
          <Route element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="sign-up" element={<Signup />} />
          </Route>
          <Route element={<RootLayout />}>
            <Route path="home" element={<Home />} />
            <Route path="category/:id" element={<CategoryPage />} />
            <Route path="docs" element={<Docs />} />
            <Route path="support" element={<Support />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
