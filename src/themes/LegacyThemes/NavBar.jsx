import { useState } from "react"; // Removed useEffect
import { useBreakpoint } from "../hooks/OpenAiHooksV2/useBreakpoint.js";
import baseStyles  from "../styles/baseStyles";
import Container from "./LegacyThemes/Container.jsx";
import { IconButton } from "../components/OpenAiV5/IconButton";

export default function NavBar({
  brand,
  links = [], // [{ label, href, onClick }]
  actions, // right side node
  currentPath, // optional for active styling
  renderLink, // optional: ({href,label,onClick,active}) => ReactNode
  className,
  style,
}) {
  const { name } = useBreakpoint();
  const isMobile = name === "xs";

  // FIX: Removed the useEffect that called setOpen(false)
  // This prevents the linter warning about state updates inside effects.
  const [open, setOpen] = useState(false);

  const defaultRenderLink = ({ href, label, onClick, active }) => (
    <a
      href={href}
      onClick={onClick}
      style={{
        padding: "8px 10px",
        borderRadius: 10,
        textDecoration: "none",
        color: active ? "rgba(59,130,246,1)" : baseStyles.fg,
        background: active ? "rgba(59,130,246,.10)" : "transparent",
        fontSize: 14,
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </a>
  );

  const r = renderLink || defaultRenderLink;

  return (
    <nav className={className} style={{ ...style }}>
      <Container>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, padding: "12px 0" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ fontFamily: baseStyles.fontFamily, fontWeight: 700, fontSize: 16 }}>
              {brand}
            </div>
            {!isMobile ? (
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                {links.map((l) =>
                  r({
                    ...l,
                    active: currentPath ? currentPath === l.href : false,
                  })
                )}
              </div>
            ) : null}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {actions}
            {isMobile ? (
              <IconButton label="Menu" onClick={() => setOpen((v) => !v)}>
                ☰
              </IconButton>
            ) : null}
          </div>
        </div>

        {isMobile && open ? (
          <div style={{ paddingBottom: 12, display: "flex", flexWrap: "wrap", gap: 6 }}>
            {links.map((l) =>
              r({
                ...l,
                active: currentPath ? currentPath === l.href : false,
              })
            )}
          </div>
        ) : null}
      </Container>
    </nav>
  );
}