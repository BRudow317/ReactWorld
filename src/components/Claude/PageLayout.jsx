import Background from './Background';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const PageLayout = ({
  header,
  footer,
  children,
  background = 'solid',
  stickyHeader = true
}) => (
  <Background variant={background}>
    <div className="flex flex-col min-h-screen">
      {header && <Header sticky={stickyHeader}>{header}</Header>}
      <Main>{children}</Main>
      {footer && <Footer>{footer}</Footer>}
    </div>
  </Background>
);

export default PageLayout;
