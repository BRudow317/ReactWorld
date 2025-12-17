import { baseStyles } from "../../styles/baseStyles";

export function Card({ children, className, style }) {
  return (
    <div
      className={className}
      style={{
        background: baseStyles.bg,
        borderRadius: baseStyles.radius,
        border: baseStyles.border,
        boxShadow: baseStyles.shadow,
        overflow: "hidden",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
