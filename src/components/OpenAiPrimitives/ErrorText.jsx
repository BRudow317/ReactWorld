export function ErrorText({ children, className, style }) {
  if (!children) return null;
  return (
    <div
      role="alert"
      className={className}
      style={{
        marginTop: 6,
        fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif",
        fontSize: 12,
        color: "rgba(239,68,68,1)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
