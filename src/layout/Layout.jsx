import { SiteShell } from "../components/SiteShell/SiteShell.jsx";
import { NavBar } from "../features/NavBar/NavBar.jsx";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <SiteShell>
      <NavBar />
      <Outlet />
    </SiteShell>
  );
}
export default Layout;
export { Layout };