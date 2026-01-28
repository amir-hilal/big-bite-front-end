import { Link } from 'react-router-dom';
import styles from './ContactTeaser.module.css';

const ContactTeaser = () => {
  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <div className={styles.card}>
          <div className={styles.content}>
            <h2 className={styles.title}>Ready to Book Big Bite for Your Event?</h2>
            <p className={styles.description}>
              Whether it's a festival, fair, private party, or corporate event, we bring the flavor!
              Contact us today to discuss your event needs and get a custom quote.
            </p>
            
            <div className={styles.contactInfo}>
              <div className={styles.infoItem}>
                <span className={styles.icon}>📞</span>
                <div>
                  <div className={styles.infoLabel}>Call Us</div>
                  <a href="tel:8439972666" className={styles.infoLink}>
                    843-997-2666
                  </a>
                </div>
              </div>

              <div className={styles.infoItem}>
                <span className={styles.icon}>✉️</span>
                <div>
                  <div className={styles.infoLabel}>Email Us</div>
                  <a href="mailto:bigbiteconcession@gmail.com" className={styles.infoLink}>
                    bigbiteconcession@gmail.com
                  </a>
                </div>
              </div>

              <div className={styles.infoItem}>
                <span className={styles.icon}>📍</span>
                <div>
                  <div className={styles.infoLabel}>Location</div>
                  <div className={styles.infoText}>
                    627 Slash Pine Ct, Myrtle Beach
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.cta}>
              <Link to="/contact" className={styles.primaryButton}>
                Send Us an Inquiry
              </Link>
              <a href="tel:8439972666" className={styles.secondaryButton}>
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactTeaser;
