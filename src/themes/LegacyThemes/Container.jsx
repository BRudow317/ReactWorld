export default function Container({ children, maxWidth = 1100, className, style }) {
  return (
    <div
      className={className}
      style={{
        width: "100%",
        maxWidth,
        margin: "0 auto",
        padding: "0 16px",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
