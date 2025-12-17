export function MainContainer({ children, className, style }) {
  return (
    <main className={className} style={{ padding: "22px 0", ...style }}>
      {children}
    </main>
  );
}
