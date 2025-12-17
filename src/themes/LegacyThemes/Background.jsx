export default function Background({
  variant = "plain", // plain | soft | gradient
  imageUrl,
  className,
  style,
  children,
}) {
  const bg =
    variant === "gradient"
      ? "radial-gradient(1000px 600px at 20% 0%, rgba(59,130,246,.22), transparent 60%), radial-gradient(900px 500px at 80% 0%, rgba(16,185,129,.18), transparent 55%), #fff"
      : variant === "soft"
      ? "linear-gradient(#fff, rgba(0,0,0,.02))"
      : "#fff";

  return (
    <div
      className={className}
      style={{
        minHeight: "100dvh",
        background: imageUrl ? `url(${imageUrl}) center/cover no-repeat` : bg,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
