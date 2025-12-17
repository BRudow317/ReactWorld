import { useId } from "react";
import { baseStyles } from "../../styles/baseStyles";

export function Checkbox({ label, checked, onChange, className, style, ...props }) {
  const id = props.id || useId();
  return (
    <label
      className={className}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        fontFamily: baseStyles.fontFamily,
        color: baseStyles.fg,
        cursor: "pointer",
        ...style,
      }}
      htmlFor={id}
    >
      <input
        {...props}
        id={id}
        type="checkbox"
        checked={!!checked}
        onChange={onChange}
        style={{ width: 16, height: 16 }}
      />
      <span style={{ fontSize: 14 }}>{label}</span>
    </label>
  );
}
