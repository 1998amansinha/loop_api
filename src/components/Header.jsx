import React from "react";
import Logo from "./shared/Logo";
import Button from "./shared/Button";

const Header = () => {
  return (
    <div className="flex justify-between bg-gradient-to-b from-red-400 h-1/5 absolute w-full">
      <div>
        <Logo />
      </div>
      <div className="mr-8 mt-5 font-inter">
        <Button title="Sign In" />
      </div>
    </div>
  );
};

export default Header;
