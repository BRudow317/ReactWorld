import Background from "./Background";
import HeaderContainer from "./HeaderContainer";
import MainContainer from "./MainContainer";
import Container from "./Container";
import FooterContainer from "./FooterContainer";
import { GlobalAnimations } from "../../styles/GlobalAnimations";
import { Outlet } from "react-router-dom";

export default function PageLayout({
  backgroundVariant = "gradient",
  header,
  nav,
  footer,
  children,
}) {
  const content = children ?? <Outlet />;

  return (
    <Background variant={backgroundVariant}>
      {header ? <HeaderContainer>{header}</HeaderContainer> : null}
      {nav ? <HeaderContainer sticky={!!header}>{nav}</HeaderContainer> : null}
      <MainContainer>
        <Container>{content}</Container>
      </MainContainer>
      {footer ? <FooterContainer>{footer}</FooterContainer> : null}
      <GlobalAnimations />
    </Background>
  );
}
