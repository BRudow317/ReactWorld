import { baseStyles } from "../../styles/baseStyles";

export function Form({ children, onSubmit, className, style }) {
  return (
    <form
      onSubmit={onSubmit}
      className={className}
      style={{ fontFamily: baseStyles.fontFamily, display: "grid", gap: 14, ...style }}
    >
      {children}
    </form>
  );
}
