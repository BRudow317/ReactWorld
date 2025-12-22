import React from "react";

export  function CldCheckbox({ label, checked, onChange, name }) {
  return (
    <label style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
      <input type="checkbox" checked={checked} onChange={onChange} name={name} />
      <span>{label}</span>
    </label>
  );
}
