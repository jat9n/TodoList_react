import { useState } from "react";

function useInput(initialValue) {
  const [state, setState] = useState(initialValue);

  const handleChange = (e) => {
    setState(e.target.value);
  };

  const reset = () => {
    setState("");
  };

  const customInput = (input) => {
    setState(input);
  };

  return [state, handleChange, customInput, reset];
}

export default useInput;
