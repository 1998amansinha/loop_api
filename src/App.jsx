import React from "react";
import { HashRouter, Routes, Route } from "react-router";
import Navbar from "./landing/Navbar";
import Body from "./Body";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
import Login from "./_auth/forms/Login";
import Signup from "./_auth/forms/Signup";
import { Home, Support, About } from "./_root/pages";
import Docs from "./_docs/Docs";
import CategoryPage from "./_root/pages/CategoryPage";
import Fetch from "./_docs/Fetch";
import Promise from "./_docs/Promise";
import { Provider } from "react-redux";
import appStore from "./utils/store/store";
import { useAuthListener } from "./firebase/authMethods";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthRedirect = () => {
  useAuthListener();
  return null; // ✅ Prevent React warning
};

const App = () => {
  return (
    <Provider store={appStore}>
      <ToastContainer position="top-right" autoClose={1500} />
      <HashRouter>
        <AuthRedirect />
        <Navbar />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<Signup />} />
          </Route>
          <Route element={<RootLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/category/:id" element={<CategoryPage />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/fetch" element={<Fetch />} />
            <Route path="/promise" element={<Promise />} />
            <Route path="/support" element={<Support />} />
            <Route path="/about" element={<About />} />
          </Route>
          <Route
            path="*"
            element={
              <div className="text-center mt-10">404: Page Not Found</div>
            }
          />
        </Routes>
      </HashRouter>
    </Provider>
  );
};

export default App;
