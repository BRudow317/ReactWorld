import React from "react";
import Background from "./Background";
import Container from "./Container";

export default function PageLayout({
  nav,
  children,
  backgroundVariant = "gradient",
}) {
  return (
    <Background variant={backgroundVariant}>
      <Container>
        {nav}
        {children}
      </Container>
    </Background>
  );
}
