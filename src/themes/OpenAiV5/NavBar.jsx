import { useState } from 'react';// , useEffect
import { baseStyles } from "../../styles/OpenAiV5/baseStyles";
import { useBreakpoint } from "../../hooks/OpenAiV5/useBreakpoint";
import { IconButton } from "../../components/OpenAiV5/IconButton";
import { Container } from "./Container";


// https://react.dev/reference/react/useState
// https://react.dev/reference/react/useReducer
// https://react.dev/reference/react/useEffect
// https://react.dev/reference/react/useRef
// https://react.dev/learn/removing-effect-dependencies#move-dynamic-objects-and-functions-inside-your-effect

//Mobile friendly responsive NavBar

export function NavBar({
  brand,
  links = [], // [{ label, href, onClick }]
  actions, // right side node
  currentPath, // optional for active styling
  renderLink, // optional: ({href,label,onClick,active}) => ReactNode
  className,
  style
}) {
  const { name } = useBreakpoint();
  const isXsScreen = name === "xs";
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const defaultRenderLink = ({ href, label, onClick, active }) => (
    <a
      href={href}
      onClick={onClick}
      style={{
        padding: "8px 10px",
        borderRadius: 10,
        textDecoration: "none",
        color: active ? "rgba(59, 246, 121, 1)" : baseStyles.fg,
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
            {!isXsScreen ? (
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
            {isXsScreen ? (
              <IconButton label="Menu" onClick={() => setMobileMenuOpen((v) => !v)}>
                ☰
              </IconButton>
            ) : null}
          </div>
        </div>

        {isXsScreen && isMobileMenuOpen ? (
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
