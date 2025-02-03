import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Signup from "./components/_auth/forms/Signup";
import Login from "./components/_auth/forms/Login";
import AuthLayout from "./components/_auth/AuthLayout";
import RootLayout from "./components/_root/RootLayout";
import { Support, About, Home } from "./components/_root/pages/index";
import Docs from "./components/_docs/Docs";
import Body from "./components/Body";

const App = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Body />} />
        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="sign-up" element={<Signup />} />
        </Route>
        <Route element={<RootLayout />}>
          <Route path="docs" element={<Docs />} />
          <Route path="support" element={<Support />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
