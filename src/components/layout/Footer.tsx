import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h3 className={styles.title}>Big Bite Concession</h3>
            <p className={styles.tagline}>
              Festival-style fair food and street bites for every occasion
            </p>
          </div>

          <div className={styles.section}>
            <h4 className={styles.heading}>Contact</h4>
            <ul className={styles.list}>
              <li>
                <a href="tel:8439972666" className={styles.link}>
                  📞 843-997-2666
                </a>
              </li>
              <li>
                <a href="mailto:bigbiteconcession@gmail.com" className={styles.link}>
                  ✉️ bigbiteconcession@gmail.com
                </a>
              </li>
              <li className={styles.address}>
                📍 627 Slash Pine Ct, Myrtle Beach
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <h4 className={styles.heading}>Quick Links</h4>
            <ul className={styles.list}>
              <li>
                <Link to="/" className={styles.link}>Home</Link>
              </li>
              <li>
                <Link to="/about" className={styles.link}>About Us</Link>
              </li>
              <li>
                <Link to="/contact" className={styles.link}>Contact</Link>
              </li>
              <li>
                <Link to="/#menu" className={styles.link}>Our Menu</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} Big Bite Concession LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
