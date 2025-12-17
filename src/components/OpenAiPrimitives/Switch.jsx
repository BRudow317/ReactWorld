import { useId } from "react";
import { Label } from "./Label";
import { baseStyles } from "../../styles/baseStyles";

export function Switch({ label, value, onChange, className, style }) {
  const id = useId();
  return (
    <div
      className={className}
      style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, ...style }}
    >
      <Label htmlFor={id} style={{ margin: 0, color: baseStyles.fg }}>
        {label}
      </Label>
      <button
        id={id}
        type="button"
        role="switch"
        aria-checked={!!value}
        onClick={() => onChange?.(!value)}
        style={{
          width: 46,
          height: 28,
          borderRadius: 999,
          border: "1px solid rgba(0,0,0,.12)",
          background: value ? "rgba(59,130,246,1)" : "rgba(0,0,0,.10)",
          position: "relative",
          cursor: "pointer",
        }}
      >
        <span
          style={{
            position: "absolute",
            top: 3,
            left: value ? 22 : 3,
            width: 22,
            height: 22,
            borderRadius: 999,
            background: "#fff",
            boxShadow: "0 6px 18px rgba(0,0,0,.18)",
            transition: "left 140ms ease",
          }}
        />
      </button>
    </div>
  );
}
