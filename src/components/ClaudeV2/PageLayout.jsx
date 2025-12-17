import React from "react";
import Background from "./Background";
import Main from "./Main";

export default function PageLayout({
  header,
  footer,
  background = "gradient",
  children,
}) {
  return (
    <Background variant={background}>
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          background: "rgba(255,255,255,0.04)",
          borderRadius: 16,
          padding: "1rem 1.5rem 2rem",
          boxShadow: "0 10px 30px rgba(15,23,42,0.4)",
        }}
      >
        {header}
        <Main>{children}</Main>
        {footer}
      </div>
    </Background>
  );
}
