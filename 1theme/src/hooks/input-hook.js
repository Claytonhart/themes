import { useState } from "react";

// Each input needs to set it's own value, setValue, & valueHandler
export const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue,
    clearInput: () => setValue(""),
    valueHandler: {
      value,
      onChange: event => {
        setValue(event.target.value);
      }
    }
  };
};
