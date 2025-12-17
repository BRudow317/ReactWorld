import { useState } from 'react';
import { useMediaQuery } from '../../hooks/ClaudeHooks/useMediaQuery';

const NavBar = ({ logo, links = [], actions }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <nav className="flex items-center justify-between relative">
      <div className="flex items-center gap-8">
        {logo && <div className="font-bold text-xl text-gray-900">{logo}</div>}
        {!isMobile && (
          <div className="flex gap-6">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>

      <div className="flex items-center gap-4">
        {!isMobile && actions}
        {isMobile && (
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="p-2 text-gray-700"
          >
            {mobileOpen ? '×' : '☰'}
          </button>
        )}
      </div>

      {isMobile && mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg p-4 flex flex-col gap-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-gray-700 hover:text-blue-600 py-2"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          {actions && <div className="pt-4 border-t">{actions}</div>}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
