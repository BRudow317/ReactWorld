import React from "react";

export default function Header({ children }) {
  return (
    <header style={{ padding: "1rem 2rem", borderBottom: "1px solid #e5e7eb" }}>
      {children}
    </header>
  );
}
