import { useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../../themes/NavConstants';

export const getPageNameFromPath = (pathname) => {
  return NAV_ITEMS.find((item) => item.path === pathname)?.name || 'Miller Land Management';
};

export const useNavigation = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const getCurrentPageName = () => getPageNameFromPath(location.pathname);

  return {
    currentPath: location.pathname,
    isActive,
    getCurrentPageName,
    navItems: NAV_ITEMS,
  };
};