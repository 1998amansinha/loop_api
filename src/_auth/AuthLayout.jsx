import React from "react";
import { Navigate, Outlet } from "react-router";

const AuthLayout = () => {
  const isAuthenticated = false;

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="flex min-h-screen">
      {/* Left Section with Auth Forms */}
      <div className="w-1/2  bg-base-100">
        <Outlet />
      </div>
      {/* Right Section with Animated Background */}
      <div className="w-1/2 relative bg-[url(https://res.cloudinary.com/do5xzpecm/image/upload/v1738683674/Animated_Shape_2_onond5.svg)] bg-cover bg-center flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-7xl bg-gradient-to-r from-purple-400 to-blue-600 bg-clip-text text-transparent font-extrabold">
            Build like a team of hundreds
          </h1>
          <div className="text-2xl mt-5 py-5 text-gray-100 font-medium">
            <p className="hover:text-blue-300 transition pb-2">Discover APIs</p>
            <p className="hover:text-blue-300 transition pb-2">
              Test from your browser
            </p>
            <p className="hover:text-blue-300 transition pb-2">
              Connect using code snippets
            </p>
            <p className="hover:text-blue-300 transition pb-2">
              Manage APIs from one dashboard
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
