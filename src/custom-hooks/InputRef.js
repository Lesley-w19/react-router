import React, { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  // console.log(props, ref);
  return <input {...props} ref={ref} />;
});

export default Input;
