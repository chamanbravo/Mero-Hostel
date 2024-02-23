import React from "react";

const Button = ({ width, bg, title }) => {
  return (
    <button
      className={` mt-5 ${width}   border  p-2 rounded-lg ${bg} transition-all ease-out duration-500`}
      type="submit"
    >
      {title}
    </button>
  );
};

export default Button;
