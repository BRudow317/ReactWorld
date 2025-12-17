export function HeaderContainer({ children, sticky = true, className, style }) {
  return (
    <header
      className={className}
      style={{
        position: sticky ? "sticky" : "static",
        top: 0,
        zIndex: 20,
        background: "rgba(255,255,255,.82)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(0,0,0,.06)",
        ...style,
      }}
    >
      {children}
    </header>
  );
}
