import React from "react";

export default function Checkbox({ label, checked, onChange, name }) {
  return (
    <label style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.95rem" }}>
      <input type="checkbox" checked={checked} onChange={onChange} name={name} />
      <span>{label}</span>
    </label>
  );
}
