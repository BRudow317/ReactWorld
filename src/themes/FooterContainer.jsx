import { baseStyles } from "../styles/baseStyles";

export default function FooterContainer({ children, className, style }) {
  return (
    <footer
      className={className}
      style={{
        borderTop: "1px solid rgba(0,0,0,.06)",
        padding: "18px 0",
        color: baseStyles.muted,
        ...style,
      }}
    >
      {children}
    </footer>
  );
}
