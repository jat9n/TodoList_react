import { useRef, useEffect } from "react";

const useFocus = () => {
  const focusRef = useRef(null);

  useEffect(() => {
    focusRef.current.focus();
  });
  return focusRef;
};

export default useFocus;
