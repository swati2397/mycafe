import { useState, useEffect } from 'react';
import '../styles/navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="logo">
          <h1>Aroma Café</h1>
        </div>
        
        <div className="hamburger" onClick={toggleMobileMenu}>
          <div className={`bar ${mobileMenuOpen ? 'active' : ''}`}></div>
          <div className={`bar ${mobileMenuOpen ? 'active' : ''}`}></div>
          <div className={`bar ${mobileMenuOpen ? 'active' : ''}`}></div>
        </div>
        
        <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a></li>
          <li><a href="#menu" onClick={() => setMobileMenuOpen(false)}>Menu</a></li>
          <li><a href="#gallery" onClick={() => setMobileMenuOpen(false)}>Gallery</a></li>
          <li><a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;