import { NavLink } from "react-router-dom";
import icon from '../../assets/MillerIcon.ico';
import { useNavigation } from '../../hooks';
import styles from './NavBar.module.css';

const NavBar = () => {
  const { navItems } = useNavigation();

  return (
    <header className={styles.navShell}>
      <div className={styles.navBrand}>
        <div className={styles.navLogo} aria-hidden="true">
          {/* Stable: always show the icon image */}
          <img src={icon} alt="Miller Land Management" className={styles.navLogoImg} />
        </div>
        <div className={styles.navMeta}>
          <span className={styles.navKicker}>Miller Land Management</span>
        </div>
      </div>

      <nav className={styles.navLinks} aria-label="Primary navigation">
        <ul className={styles.navList}>
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navLink} ${styles.active}`
                    : styles.navLink
                }
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
