import { Button } from "./Button";

export function IconButton({ label, children, ...props }) {
  return (
    <Button
      aria-label={label}
      variant="ghost"
      size="sm"
      style={{ padding: 8, borderRadius: 999 }}
      {...props}
    >
      {children}
    </Button>
  );
}
