import React from "react";
import Logo from "./shared/Logo";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignInClick = () => {
    navigate("/sign-in");
  };

  // Check whether the user is in sign-in / sign-up page
  const isAuthPage =
    location.pathname === "/sign-in" || location.pathname === "/sign-up";

  return (
    <div className="flex justify-between bg-gradient-to-b from-red-400 h-1/5 absolute w-full">
      <div>
        <Logo />
      </div>
      {!isAuthPage && (
        <div className="mr-8 mt-5 font-inter">
          <button
            className="px-9 py-3 bg-red-600 rounded-md  text-white text-lg font-medium hover:bg-red-700 "
            onClick={handleSignInClick}
          >
            Sign in
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
