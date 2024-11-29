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
      <h1 className="text-neutral-300 ml-6 mt-24 font-bold text-2xl font">
        LOOP API
      </h1>
    </div>
  );
};

export default Logo;
