import React, { useId } from "react";
import { baseStyles } from "../../styles/OpenAiV5/baseStyles";
import { Label } from "./Label";
import { HelperText } from "./HelperText";
import { ErrorText } from "./ErrorText";

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

export function TextArea({
  label,
  helperText,
  error,
  className,
  style,
  rows = 4,
  ...props
}) {
  const propsId = useId();
  const id = props.id || propsId;
  return (
    <div className={className} style={{ ...style }}>
      {label ? <Label htmlFor={id}>{label}</Label> : null}
      <textarea
        {...props}
        id={id}
        rows={rows}
        style={{
          ...inputBaseStyle({ invalid: !!error, disabled: props.disabled }),
          resize: "vertical",
        }}
        onFocus={(e) => (e.currentTarget.style.boxShadow = baseStyles.focus)}
        onBlur={(e) => (e.currentTarget.style.boxShadow = "none")}
      />
      {error ? <ErrorText>{error}</ErrorText> : <HelperText>{helperText}</HelperText>}
    </div>
  );
}
