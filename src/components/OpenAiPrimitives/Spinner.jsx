export function Spinner({ size = 18, className, style }) {
  return (
    <span
      aria-label="Loading"
      className={className}
      style={{
        display: "inline-block",
        width: size,
        height: size,
        borderRadius: 999,
        border: "2px solid rgba(0,0,0,.20)",
        borderTopColor: "rgba(0,0,0,.70)",
        animation: "ui-spin 0.8s linear infinite",
        ...style,
      }}
    />
  );
}
