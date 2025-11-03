import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const ClassLabel = ({ altText = 'Class icon', className = '6', label = 'Class' }) => (
  <div className="flex flex-col" role="img" aria-label={`${label} ${className}`}>
    {/* Image using public folder path (no import needed—served statically) */}
    <img
      src="../../pages/assets/images/logo.png"
      alt={altText}
      className="w-8 h-8 mb-1 self-start" // Adjusted: smaller margin, self-start for left alignment like original SVG
    />
    <span className="font-body text-xs text-muted-foreground tracking-wide">
      {className}
    </span>
  </div>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Portfolio', path: '/portfolio-gallery', icon: 'Camera' },
    { name: 'Contact', path: '/contact', icon: 'MessageCircle' },
  ];

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-organic ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-soft border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-6 lg:px-8">
          {/* Logo - Restored horizontal layout for better alignment with original */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group transition-organic hover:opacity-80"
          >
            <ClassLabel className="6" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg font-body text-sm font-medium transition-organic ${
                  isActivePath(item?.path)
                    ? 'text-accent bg-accent/10' :'text-foreground hover:text-accent hover:bg-accent/5'
                }`}
              >
                <Icon name={item?.icon} size={16} />
                <span>{item?.name}</span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm"
              className="font-body"
            >
              View Gallery
            </Button>
            <Button 
              variant="default" 
              size="sm"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-body"
            >
              Begin Your Story
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-foreground hover:text-accent hover:bg-accent/5 transition-organic"
            aria-label="Toggle menu"
          >
            <Icon name={isMenuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
            <nav className="px-6 py-4 space-y-2">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-body text-sm font-medium transition-organic ${
                    isActivePath(item?.path)
                      ? 'text-accent bg-accent/10' :'text-foreground hover:text-accent hover:bg-accent/5'
                  }`}
                >
                  <Icon name={item?.icon} size={18} />
                  <span>{item?.name}</span>
                </Link>
              ))}
              
              {/* Mobile CTAs */}
              <div className="pt-4 space-y-3 border-t border-border mt-4">
                <Button 
                  variant="outline" 
                  fullWidth
                  className="font-body"
                  onClick={() => setIsMenuOpen(false)}
                >
                  View Gallery
                </Button>
                <Button 
                  variant="default" 
                  fullWidth
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-body"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Begin Your Story
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;