import React from "react";

export default function Form({ children, ...props }) {
  return (
    <form
      onSubmit={props.onSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}
    >
      {children}
    </form>
  );
}
