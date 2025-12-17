import React from "react";

export default function NavBar({ logo, links = [], actions }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
      }}
    >
      <div style={{ fontWeight: 700, fontSize: 20 }}>{logo}</div>
      <nav style={{ display: "flex", gap: 12 }}>
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={link.onClick}
            style={{
              color: "#0f172a",
              textDecoration: "none",
              fontWeight: link.active ? 700 : 500,
            }}
          >
            {link.label}
          </a>
        ))}
      </nav>
      {actions && <div>{actions}</div>}
    </div>
  );
}
