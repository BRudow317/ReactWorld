export function CardGrid({ children, minCardWidth = 260, gap = 14, className, style }) {
  return (
    <div
      className={className}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(auto-fit, minmax(${minCardWidth}px, 1fr))`,
        gap,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
