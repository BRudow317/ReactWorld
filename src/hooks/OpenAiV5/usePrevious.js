import { useState } from "react";

export function usePrevious(value) {
  const [state, setState] = useState({
    value: value,
    prev: value, 
  });

  // Check if the incoming value is different from whats stored
  if (value !== state.value) {
    setState({
      value: value, // set the new value and push down the old one
      prev: state.value, // The "old" value becomes the new previous
    });
  }

  // Return the previous value
  return state.prev;
}