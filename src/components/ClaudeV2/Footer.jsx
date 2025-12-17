import React from "react";

export default function Footer({ children }) {
  return (
    <footer style={{ padding: "1rem 2rem", borderTop: "1px solid #e5e7eb", textAlign: "center" }}>
      {children}
    </footer>
  );
}
