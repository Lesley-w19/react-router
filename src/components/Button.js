import React, { useState } from "react";

const Button = (props) => {
  const [size] = useState(props.size);
  const [variant] = useState(props.variant);
  const [color] = useState(props.color);
  return (
    <>
      <button className={`btn-${variant} btn-${size} btn-${color}`}>
        {props.children}
      </button>
    </>
  );
};
export default Button;
