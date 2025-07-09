import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "/assets/logo1.png";

// Navigation data
const navigationItems = [
  { path: "/", label: "Home" },
  { path: "/about-us", label: "About Us" },
  { path: "/services", label: "Services" },
  { path: "/contact", label: "Contact Us" },
];

// Reusable NavLink component
const NavLink = ({
  to,
  children,
  isActive,
  onClick,
  className = "",
}: {
  to: string;
  children: React.ReactNode;
  isActive: boolean;
  onClick?: () => void;
  className?: string;
}) => (
  <Link
    to={to}
    onClick={onClick}
    className={`
      font-primary font-medium transition-all duration-200 hover:text-primary
      ${isActive ? "text-neutral-50 bg-primary-hover" : ""} 
      ${className}
    `}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* Main Navigation */}
      <nav className="sticky top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-blue-dark   shadow-lg supports-[backdrop-filter]:bg-[#0a5fde]/80  font-primary">
        <div className="container mx-auto px-4 lg:px-8 ">
          <div className="flex items-center justify-between h-16 ">
            {/* Logo */}
            <div className="">
              <img
                src={logo}
                alt="Ahmed-Abdul&co"
                className="size-10 lg:size-12 object-contain rounded-md"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navigationItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    isActive={isActive(item.path)}
                    className="text-base lg:text-lg px-3 py-1 rounded-md text-neutral-50  hover:bg-primary-dark  "
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 rounded-md text-neutral-50 hover:text-neutral-900 hover:bg-neutral-200 
                         focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                aria-expanded={mobileOpen}
                aria-label="Toggle navigation menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {mobileOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
            onClick={() => setMobileOpen(false)}
          />

          {/* Mobile menu panel */}
          <div className="fixed top-16 left-0 right-0 bg-neutral-100 shadow-xl max-h-screen overflow-y-auto">
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  isActive={isActive(item.path)}
                  onClick={() => setMobileOpen(false)}
                  className="block text-xl py-3 px-4 rounded-lg hover:bg-neutral-200"
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
