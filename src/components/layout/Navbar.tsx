import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const handleBookUsClick = () => {
    if (location.pathname === '/') {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/contact');
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav} aria-label="Main navigation">
        <div className={`container ${styles.container}`}>
          <Link to="/" className={styles.logo} aria-label="Big Bite Concession Home">
            <div className={styles.logoImage}>
              <img src="/logo.png" alt="Big Bite Concession" className={styles.logoImg} />
            </div>
            <span className={styles.logoText}>Big Bite Concession</span>
          </Link>

          <button
            className={styles.hamburger}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
          </button>

          <div className={`${styles.navLinks} ${isMenuOpen ? styles.navLinksOpen : ''}`}>
            <Link
              to="/"
              className={location.pathname === '/' ? styles.active : ''}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={location.pathname === '/about' ? styles.active : ''}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={location.pathname === '/contact' ? styles.active : ''}
            >
              Contact
            </Link>
            <button
              onClick={handleBookUsClick}
              className={styles.ctaButton}
              aria-label="Book us for your event"
            >
              Book Us
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
