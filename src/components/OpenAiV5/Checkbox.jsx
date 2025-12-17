import { useId } from "react";
import { baseStyles } from "../../styles/OpenAiV5/baseStyles";

export function Checkbox({ label, checked, onChange, className, style, ...props }) {
  const propsId = useId();
  //const id = props.id || useId();
  const id = props.id || propsId;
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
