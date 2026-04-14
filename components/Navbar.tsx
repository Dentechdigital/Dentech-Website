import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, UserCircle, Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  // Handle scroll effect for transparent to solid navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const services = [
    { name: 'Local SEO, GEO & Maps', path: '/services/local-seo' },
    { name: 'Paid Advertising', path: '/services/paid-ads' },
    { name: 'Custom Websites', path: '/services/websites' },
    { name: 'Content & Community', path: '/services/social-content' },
    { name: 'Print & Direct Mail', path: '/services/print' },
    { name: 'AI & Automation', path: '/services/ai-automation' },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isServicesActive = location.pathname === '/services' || location.pathname.startsWith('/services/');
  const isHomePage = location.pathname === '/';
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // Safety: ensure menu closes after any route change.
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  // Determine navbar styling based on scroll state and current page
  const navClasses = `fixed w-full top-0 transition-all duration-300 ${isMobileMenuOpen ? 'z-[70]' : 'z-50'} ${
    scrolled || !isHomePage || isMobileMenuOpen
      ? 'bg-white/60 dark:bg-slate-950/65 backdrop-blur-xl shadow-sm border-b border-gray-200/50 dark:border-slate-800/50 py-2'
      : 'bg-transparent border-b border-transparent py-4'
  }`;

  // Determine text color based on scroll state and theme
  const getTextColor = (path: string) => {
    if (isActive(path)) return 'text-blue-600 dark:text-blue-400';
    if (!scrolled && isHomePage && !isMobileMenuOpen && theme !== 'dark') return 'text-blue-950 hover:text-blue-600';
    return 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400';
  };

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img 
                src={theme === 'dark' ? `${import.meta.env.BASE_URL}logo-dark.svg?v=2` : `${import.meta.env.BASE_URL}logo-light.svg?v=2`} 
                alt="Dentech Digital" 
                className="h-14 sm:h-16 w-auto transition-all duration-300"
              />
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-6 lg:space-x-8">
            <Link to="/" className={`${getTextColor('/')} px-3 py-2 rounded-md text-sm font-semibold tracking-wide transition-colors`}>
              Home
            </Link>
            <Link to="/about" className={`${getTextColor('/about')} px-3 py-2 rounded-md text-sm font-semibold tracking-wide transition-colors`}>
              About
            </Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative flex items-center"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <Link
                to="/services"
                className={`${
                  isServicesActive
                    ? 'text-blue-600 dark:text-blue-400'
                    : getTextColor('/services')
                } px-3 py-2 rounded-md text-sm font-semibold tracking-wide transition-colors`}
              >
                Services
              </Link>
              <button
                className={`${
                  isServicesActive
                    ? 'text-blue-600 dark:text-blue-400'
                    : getTextColor('/services')
                } -ml-2 rounded-md p-1 focus:outline-none`}
                aria-label="Open services menu"
              >
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 pt-2 w-56 focus:outline-none transform opacity-100 scale-100 transition-all duration-200 origin-top-left">
                  <div className="rounded-xl shadow-xl bg-white dark:bg-slate-800 ring-1 ring-black/5 dark:ring-white/10 overflow-hidden">
                    <div className="py-2" role="menu" aria-orientation="vertical">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          to={service.path}
                          className="block px-4 py-2.5 text-sm font-medium text-blue-950 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-slate-700/50 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                          role="menuitem"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link to="/case-studies" className={`${getTextColor('/case-studies')} px-3 py-2 rounded-md text-sm font-semibold tracking-wide transition-colors`}>
              Case Studies
            </Link>
            <Link to="/contact" className={`${getTextColor('/contact')} px-3 py-2 rounded-md text-sm font-semibold tracking-wide transition-colors`}>
              Contact
            </Link>
            
            <div className={`flex items-center space-x-4 pl-4 border-l ${scrolled || !isHomePage ? 'border-gray-200 dark:border-slate-700' : 'border-gray-300 dark:border-slate-700'} transition-colors`}>
              <Link to="/portal" className="flex items-center space-x-2 bg-blue-600 text-white hover:bg-blue-700 px-5 py-2.5 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5">
                <UserCircle className="w-4 h-4" />
                <span>Client Portal</span>
              </Link>
              
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className={`p-2.5 rounded-full transition-all duration-200 focus:outline-none ${
                  scrolled || !isHomePage
                    ? 'text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-slate-800'
                    : 'text-blue-950 hover:bg-white/20 dark:text-gray-300 dark:hover:bg-slate-800'
                }`}
                aria-label="Toggle dark mode"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden space-x-4">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={`p-2 rounded-full transition-colors focus:outline-none ${
                scrolled || !isHomePage || isMobileMenuOpen
                  ? 'text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-slate-800'
                  : 'text-blue-950 hover:bg-white/20 dark:text-gray-300 dark:hover:bg-slate-800'
              }`}
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none ${
                scrolled || !isHomePage || isMobileMenuOpen
                  ? 'text-gray-600 hover:text-blue-950 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-slate-800'
                  : 'text-blue-950 hover:text-blue-950 hover:bg-white/20 dark:text-gray-300 dark:hover:text-white dark:hover:bg-slate-800'
              }`}
              aria-label={isMobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
            >
              {isMobileMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-950 border-t border-gray-100 dark:border-slate-800 shadow-xl absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-1 sm:px-6">
            <Link to="/" onClick={closeMobileMenu} className="block px-3 py-3 rounded-lg text-base font-semibold text-blue-950 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors">Home</Link>
            <Link to="/about" onClick={closeMobileMenu} className="block px-3 py-3 rounded-lg text-base font-semibold text-blue-950 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors">About</Link>
            <Link to="/services" onClick={closeMobileMenu} className="block px-3 py-3 rounded-lg text-base font-semibold text-blue-950 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors">Services</Link>
            <div className="pl-4 space-y-1 border-l-2 border-gray-100 dark:border-slate-800 ml-3 my-2">
              {services.map((service) => (
                <Link key={service.name} to={service.path} onClick={closeMobileMenu} className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors">
                  {service.name}
                </Link>
              ))}
            </div>
            <Link to="/case-studies" onClick={closeMobileMenu} className="block px-3 py-3 rounded-lg text-base font-semibold text-blue-950 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors">Case Studies</Link>
            <Link to="/contact" onClick={closeMobileMenu} className="block px-3 py-3 rounded-lg text-base font-semibold text-blue-950 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors">Contact</Link>
            <Link to="/portal" onClick={closeMobileMenu} className="flex items-center justify-center space-x-2 w-full mt-6 px-4 py-3 rounded-xl text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md transition-colors">
              <UserCircle className="w-5 h-5" />
              <span>Client Portal Login</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
