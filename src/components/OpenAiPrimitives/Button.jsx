import { Spinner } from "./Spinner";
import { baseStyles } from "../../styles/baseStyles";

export function Button({
  children,
  variant = "primary", // primary | secondary | ghost | danger
  size = "md", // sm | md | lg
  loading = false,
  disabled,
  leftIcon,
  rightIcon,
  className,
  style,
  ...props
}) {
  const pad =
    size === "sm" ? "8px 10px" : size === "lg" ? "12px 14px" : "10px 12px";
  const fontSize = size === "sm" ? 13 : size === "lg" ? 15 : 14;

  const palette =
    variant === "primary"
      ? { bg: "rgba(59,130,246,1)", fg: "#fff", bd: "transparent" }
      : variant === "secondary"
      ? { bg: baseStyles.bgSoft, fg: baseStyles.fg, bd: "rgba(0,0,0,.10)" }
      : variant === "danger"
      ? { bg: "rgba(239,68,68,1)", fg: "#fff", bd: "transparent" }
      : { bg: "transparent", fg: baseStyles.fg, bd: "transparent" };

  return (
    <button
      {...props}
      disabled={disabled || loading}
      className={className}
      style={{
        fontFamily: baseStyles.fontFamily,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        padding: pad,
        borderRadius: baseStyles.radius,
        border: `1px solid ${palette.bd}`,
        background: palette.bg,
        color: palette.fg,
        cursor: disabled || loading ? "not-allowed" : "pointer",
        opacity: disabled ? 0.6 : 1,
        fontSize,
        lineHeight: 1.1,
        boxShadow: variant === "primary" || variant === "danger" ? baseStyles.shadow : "none",
        userSelect: "none",
        ...style,
      }}
    >
      {loading ? <Spinner size={16} /> : leftIcon ? <span>{leftIcon}</span> : null}
      <span style={{ whiteSpace: "nowrap" }}>{children}</span>
      {rightIcon ? <span>{rightIcon}</span> : null}
    </button>
  );
}
