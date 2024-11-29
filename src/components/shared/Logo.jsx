import React from "react";
import { LOGO_URL } from "../../constants/Images";

const Logo = () => {
  return (
    <div className="flex -mt-6 ml-6">
      <img
        className="w-44 mix-blend-multiply absolute mt-2"
        src={LOGO_URL}
        alt="LOGO"
      />
      <h1 className="text-white ml-8 mt-24 font-bold text-xl font">LOOP API</h1>
    </div>
  );
};

export default Logo;
