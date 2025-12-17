import React from "react";

export default function Container({ children, maxWidth = 1200 }) {
  return (
    <div
      style={{
        maxWidth,
        margin: "0 auto",
        padding: "1rem 1.5rem",
      }}
    >
      {children}
    </div>
  );
}
