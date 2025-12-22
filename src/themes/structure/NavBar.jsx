import { NavLink } from "react-router-dom";
import icon from '../../assets/MillerIcon.ico';
//import logo from '../../assets/MlmLogo.jpg';
//import { useNavigation } from '../hooks/Mlm/useNavigation';
import { useNavigation } from '../../hooks/Mlm/useNavigation.js';
//import { NAV_ITEMS } from "../NavConstants";
import { DarkTheme,LightTheme, ContainerBorderTheme, createDiagonalGradient } from "../ThemeStyles";

const NavBar = () => {
  const { navItems } = useNavigation();
  //function Background({ children }) { {children}
  // Shadow definitions
  //const shadowOuterDrop = '0 22px 60px rgba(0, 0, 0, 0.35)'; // outer drop shadow
  //const shadowInnerSmall = '0 2px 8px'; // inner small shadow
  
  // const shadowLogoOuter = '0 12px 30px rgba(0, 0, 0, 0.35)'; // outer drop for logo
  // const shadowLogoInner = 'inset 0 1px 0 rgba(255, 255, 255, 0.08)'; // inset highlight for depth
  
  const shadowLinkActive = '0 12px 28px rgba(63, 200, 120, 0.35)'; // active link glow
  const shadowLinkActiveInner = '0 2px 8px rgba(0, 0, 0, 0.28)'; // active link inner shadow

  const navBorders = `1px solid rgba(255, 255, 255, 0.12)`; // subtle border outline

  const textShadow ={
    textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px  1px 0 #000, 1px  1px 0 #000'
  }

  const navShellStyle = {
      fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif", // system font stack, overridden by browser defaults
      width: '100%',
      minHeight: '10%', // minimum navbar height, overridden by content if needed
      maxHeight: '20%', // maximum navbar height = 20% viewport, prevents excessive growth
      margin: '0', // no margins, snaps to edges
      padding: '0', // no external spacing
      paddingLeft: '1rem', // internal spacing, overridden by child padding
      //paddingRight: '1.25rem', // internal spacing, overridden by child padding
      display: 'flex', // flex layout for alignment
      alignItems: 'center', // vertical center alignment
      justifyContent: 'flex-start', // align items to the left
      gap: '.75rem', // spacing between flex children
      background: createDiagonalGradient(`${DarkTheme.MlmDark}`, `rgba(31, 41, 31, .25)`), //`linear-gradient(135deg, rgba(22, 29, 22, 1), #101b10)`, // dark green gradient
      border: navBorders, // subtle border
      position: 'sticky', // sticks to top on scroll
      top: '0', // no offset from top
      zIndex: 10, // above most content
      boxSizing: 'border-box', // padding included in width calc
      overflow: 'hidden', // hide content extending beyond edges
      ...ContainerBorderTheme,
  };

  //contains logo and company name
  const navBrandStyle = {
    display: 'flex', // flex layout for horizontal alignment
    alignItems: 'center', // vertical centering
    gap: '0.85rem', // spacing between logo and meta
  };
  //contains logo image
  const navLogoStyle = {
    minHeight: '40px',// minimum height
    maxHeight: '75px', // maximum height
    aspectRatio: '1 / 1', // maintains square aspect ratio
    objectFit: 'contain', // maintains aspect ratio without cropping
    display: 'grid', // grid for centering image
    placeItems: 'center', // center content both axes
    background: DarkTheme.MlmDark, // dark background
    // Reuse shared frame styles for border, shadow, and radius
    ...ContainerBorderTheme,
  };
  // logo style
  const navLogoImgStyle = {
    height: '100%',
    minHeight: '3rem',
    width: 'auto', 
    aspectRatio: '1 / 1',
    objectFit: 'contain', // maintains aspect ratio without stretching
    borderRadius: 'min(12px, 12%)', // slightly rounded corners for image
  };
  //company name container
  const navMetaStyle = {
    display: 'flex', // flex layout for vertical stacking
    flexDirection: 'column', // stack text vertically
    gap: '0.1rem', // minimal spacing between lines
  };
  
  const navKickerStyle = {
    //fontSize: '0.78rem', // small uppercase label
    letterSpacing: '0.10em', // wide letter spacing for uppercase
    textTransform: 'uppercase', // converts text to all caps
    fontWeight: 800, // semibold weight
    color: DarkTheme.MlmOrange, // text color
  };

  const navLinksStyle = {
    flex: 1, // takes remaining space after brand
    display: 'flex', // flex layout
    justifyContent: 'flex-start', // align items to the left
  };

  const navListStyle = {
    display: 'flex', // flex layout for horizontal alignment
    alignItems: 'center', // vertical centering
    gap: '0.35rem', // tight spacing between nav items
    listStyle: 'none', // removes default list bullets
    //margin: 0, // no margins
    paddingLeft: 0, // no padding
    paddingRight: '1rem', // right padding for spacing
  };
  // buttons for nav links
  const getNavLinkStyle = (isActive) => ({
    position: 'relative', // for ::after pseudo-element positioning
    display: 'inline-flex', // flex layout for content alignment
    alignItems: 'center', // vertical centering
    gap: '0.35rem', // spacing between icon/text
    padding: '0.65rem 0.9rem', // internal spacing
    borderRadius: '12px', // rounded corners
    color: isActive ? DarkTheme.MlmOrange : DarkTheme.MlmWhite, // dark text when active, light when inactive
    textDecoration: 'none', // removes link underline
    fontWeight: isActive ? 700 : 400, // semibold when active, normal when inactive
    textShadow: isActive ? textShadow.textShadow : 'none', // no shadow when active, subtle shadow when inactive
    background: isActive 
      ? DarkTheme.MlmGreen // light green background when active
      : DarkTheme.MlmDark, // dark background when inactive
    border: isActive ? 'none' : '1px solid transparent', // no border when active, invisible border when inactive
    boxShadow: isActive 
      ? `${shadowLinkActive}, ${shadowLinkActiveInner}` // layered shadows for active state depth
      : 'none', // no shadow when inactive
    transition: 'all 200ms ease', // smooth transition between states
  });

  return (
    <header style={navShellStyle}>
      <div style={navBrandStyle}>
        <div style={navLogoStyle} aria-hidden="true">
          {/* Stable: always show the icon image */}
          <img src={icon} alt="Miller Land Management" style={navLogoImgStyle} />
        </div>
        <div style={navMetaStyle}>
          <span style={navKickerStyle}>Miller Land Management</span>
        </div>
      </div>

      <nav style={navLinksStyle} aria-label="Primary navigation">
        <ul style={navListStyle}>
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.path === '/'}
                style={({ isActive }) => getNavLinkStyle(isActive)}
              >
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
