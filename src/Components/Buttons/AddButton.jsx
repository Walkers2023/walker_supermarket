import React from "react";

const Button = ({ text, className, type, btnClickFunc }) => {
  return (
    <div className=" w-fit flex items-center justify-center">
      <button type={type} className={className} onClick={btnClickFunc}>
        {text}
      </button>
    </div>
  );
};

export default Button;
