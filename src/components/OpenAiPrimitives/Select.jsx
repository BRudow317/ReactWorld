import { useId } from "react";
import { Label } from "./Label";
import { HelperText } from "./HelperText";
import { ErrorText } from "./ErrorText";
import { baseStyles } from "../../styles/baseStyles";

function inputBaseStyle({ invalid, disabled }) {
  return {
    width: "100%",
    fontFamily: baseStyles.fontFamily,
    padding: "10px 12px",
    borderRadius: baseStyles.radiusSm,
    border: `1px solid ${invalid ? "rgba(239,68,68,.55)" : "rgba(0,0,0,.12)"}`,
    background: disabled ? "rgba(0,0,0,.03)" : baseStyles.bg,
    color: baseStyles.fg,
    outline: "none",
    boxShadow: "none",
  };
}

export function Select({
  label,
  helperText,
  error,
  options = [], // [{ value, label }]
  className,
  style,
  ...props
}) {
  const id = props.id || useId();
  return (
    <div className={className} style={{ ...style }}>
      {label ? <Label htmlFor={id}>{label}</Label> : null}
      <select
        {...props}
        id={id}
        style={inputBaseStyle({ invalid: !!error, disabled: props.disabled })}
        onFocus={(e) => (e.currentTarget.style.boxShadow = baseStyles.focus)}
        onBlur={(e) => (e.currentTarget.style.boxShadow = "none")}
      >
        {options.map((o) => (
          <option key={String(o.value)} value={o.value}>
            {o.label ?? String(o.value)}
          </option>
        ))}
      </select>
      {error ? <ErrorText>{error}</ErrorText> : <HelperText>{helperText}</HelperText>}
    </div>
  );
}
