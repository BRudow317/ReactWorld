import React from "react";
import { Background } from "./Background";
import { HeaderContainer } from "./HeaderContainer";
import { MainContainer } from "./MainContainer";
import { Container } from "./Container";
import { FooterContainer } from "./FooterContainer";
import { GlobalAnimations } from "../../styles/OpenAiV5/GlobalAnimations";

export default function PageLayout({
  backgroundVariant = "gradient",
  header,
  nav,
  footer,
  children,
}) {
  return (
    <Background variant={backgroundVariant}>
      {header ? <HeaderContainer>{header}</HeaderContainer> : null}
      {nav ? <HeaderContainer sticky={!!header}>{nav}</HeaderContainer> : null}
      <MainContainer>
        <Container>{children}</Container>
      </MainContainer>
      {footer ? <FooterContainer>{footer}</FooterContainer> : null}
      <GlobalAnimations />
    </Background>
  );
}
