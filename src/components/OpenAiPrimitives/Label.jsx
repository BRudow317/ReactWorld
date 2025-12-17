import { baseStyles } from "../../styles/baseStyles";

export function Label({ children, htmlFor, className, style }) {
  return (
    <label
      htmlFor={htmlFor}
      className={className}
      style={{
        fontFamily: baseStyles.fontFamily,
        fontSize: 13,
        color: baseStyles.muted,
        display: "block",
        marginBottom: 6,
        ...style,
      }}
    >
      {children}
    </label>
  );
}
