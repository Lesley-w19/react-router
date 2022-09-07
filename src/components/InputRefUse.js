import React, { useRef , useState} from "react";
import InputRef from "../custom-hooks/InputRef";
const InputReftUse = () => {
  const inputRef = useRef(null);
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setInput(value);
  };

  const handlefocus = () => {
    inputRef.current?.focus();
  };
  return (
    <React.Fragment>
      <InputRef value={input} ref={inputRef} onChange={handleChange} />
      <button onClick={handlefocus}>Focus</button>
    </React.Fragment>
  );
};

export default InputReftUse;
