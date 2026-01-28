import ContactForm from '../components/ContactForm/ContactForm';
import SEO from '../components/SEO/SEO';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <>
      <SEO
        title="Contact Us - Big Bite Concession"
        description="Contact Big Bite Concession to book us for your next event, fair, festival, or private party. Call 843-997-2666 or email bigbiteconcession@gmail.com."
      />

      <div className={styles.page}>
        <section className={styles.hero}>
          <div className="container">
            <h1 className={styles.title}>Let's Talk About Your Event</h1>
            <p className={styles.lead}>
              We'd love to hear from you! Fill out the form below or reach out
              directly.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <div className={styles.content}>
              <div className={styles.formContainer}>
                <h2 className={styles.heading}>Send Us an Inquiry</h2>
                <p className={styles.description}>
                  Tell us about your event and we'll get back to you with a
                  custom quote within 24 hours.
                </p>
                <ContactForm />
              </div>

              <aside className={styles.sidebar}>
                <div className={styles.card}>
                  <h3 className={styles.cardTitle}>Contact Information</h3>

                  <div className={styles.contactList}>
                    <div className={styles.contactItem}>
                      <span className={styles.contactIcon}>📞</span>
                      <div>
                        <div className={styles.contactLabel}>Phone</div>
                        <a href="tel:8439972666" className={styles.contactLink}>
                          843-997-2666
                        </a>
                      </div>
                    </div>

                    <div className={styles.contactItem}>
                      <span className={styles.contactIcon}>✉️</span>
                      <div>
                        <div className={styles.contactLabel}>Email</div>
                        <a
                          href="mailto:bigbiteconcession@gmail.com"
                          className={styles.contactLink}
                        >
                          bigbiteconcession@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className={styles.contactItem}>
                      <span className={styles.contactIcon}>📍</span>
                      <div>
                        <div className={styles.contactLabel}>Location</div>
                        <div className={styles.contactText}>
                          627 Slash Pine Ct
                          <br />
                          Myrtle Beach
                        </div>
                      </div>
                    </div>
                  </div>

                  <a href="tel:8439972666" className={styles.callButton}>
                    <span className={styles.callIcon}>📞</span>
                    Call Now
                  </a>
                </div>

                <div className={styles.card}>
                  <h3 className={styles.cardTitle}>Business Hours</h3>
                  <p className={styles.hoursText}>
                    We operate on an event-by-event basis. Contact us anytime to
                    discuss your event needs and availability. We'll respond to
                    all inquiries within 24 hours.
                  </p>
                </div>

                <div className={styles.card}>
                  <h3 className={styles.cardTitle}>Service Areas</h3>
                  <p className={styles.hoursText}>
                    Based in Myrtle Beach, we serve events throughout the
                    Southeast states. Contact us to discuss your event location
                    - we travel!
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
