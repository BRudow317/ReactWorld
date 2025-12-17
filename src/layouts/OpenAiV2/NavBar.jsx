import React from "react";

export default function NavBar({ brand, links = [], actions }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem 0",
        gap: 16,
      }}
    >
      <div style={{ fontWeight: 700, fontSize: 20 }}>{brand}</div>
      <nav style={{ display: "flex", gap: 12 }}>
        {links.map((link) => (
          <button
            key={link.label}
            onClick={link.onClick}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              fontWeight: link.active ? 700 : 500,
              color: "#e2e8f0",
            }}
          >
            {link.label}
          </button>
        ))}
      </nav>
      {actions && <div>{actions}</div>}
    </div>
  );
}
