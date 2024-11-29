import React from "react";

const Button = (props) => {
  const { title } = props;
  return (
    <div>
      <button className="px-9 py-3 bg-red-600 rounded-md  text-white text-lg font-medium hover:bg-red-700 ">
        {title}
      </button>
    </div>
  );
};

export default Button;
