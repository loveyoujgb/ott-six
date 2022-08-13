import { useState, useCallback } from "react";

function useInputs() {
  const [value, setValue] = useState("");

  const handler = (e) => {
    setValue(e.target.value);
  };

  return [value, handler];
}

export default useInputs;
