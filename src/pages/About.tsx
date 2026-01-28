import SEO from '../components/SEO/SEO';
import styles from './About.module.css';

const About = () => {
  return (
    <>
      <SEO 
        title="About Us - Big Bite Concession"
        description="Learn about Big Bite Concession LLC - your trusted provider of festival-style fair food and street bites in Myrtle Beach. Serving fairs, festivals, and private events."
      />
      
      <div className={styles.page}>
        <section className={styles.hero}>
          <div className="container">
            <h1 className={styles.title}>About Big Bite Concession</h1>
            <p className={styles.lead}>
              Bringing authentic festival flavor and big portions to every event
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <div className={styles.content}>
              <div className={styles.story}>
                <h2 className={styles.heading}>Our Story</h2>
                <p className={styles.text}>
                  Big Bite Concession LLC was founded with a simple mission: to bring the authentic 
                  taste and excitement of festival fair food to events across Myrtle Beach and beyond. 
                  We believe that great food brings people together and creates lasting memories.
                </p>
                <p className={styles.text}>
                  Our passion for quality street food and dedication to customer satisfaction has made 
                  us a favorite at festivals, fairs, and private events throughout the region. Every 
                  item on our menu is prepared fresh to order using quality ingredients, ensuring that 
                  each bite is as good as the last.
                </p>
              </div>

              <div className={styles.values}>
                <h2 className={styles.heading}>Our Values</h2>
                <div className={styles.valueGrid}>
                  <div className={styles.valueCard}>
                    <h3 className={styles.valueTitle}>Quality First</h3>
                    <p className={styles.valueText}>
                      We never compromise on ingredients or preparation. Every dish is made with care 
                      and attention to detail.
                    </p>
                  </div>
                  <div className={styles.valueCard}>
                    <h3 className={styles.valueTitle}>Customer Focus</h3>
                    <p className={styles.valueText}>
                      Your satisfaction is our priority. We work closely with event organizers to 
                      exceed expectations.
                    </p>
                  </div>
                  <div className={styles.valueCard}>
                    <h3 className={styles.valueTitle}>Reliability</h3>
                    <p className={styles.valueText}>
                      When you book Big Bite, you can count on us to show up prepared and deliver 
                      exceptional service.
                    </p>
                  </div>
                  <div className={styles.valueCard}>
                    <h3 className={styles.valueTitle}>Community</h3>
                    <p className={styles.valueText}>
                      We're proud to be part of the Myrtle Beach community and support local events 
                      and organizations.
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.services}>
                <h2 className={styles.heading}>What We Offer</h2>
                <div className={styles.serviceList}>
                  <div className={styles.serviceItem}>
                    <div className={styles.serviceIcon}>🎪</div>
                    <div className={styles.serviceContent}>
                      <h3 className={styles.serviceTitle}>Fairs & Festivals</h3>
                      <p className={styles.serviceText}>
                        Full concession stand services for public fairs, festivals, and community events. 
                        We bring the complete festival food experience.
                      </p>
                    </div>
                  </div>

                  <div className={styles.serviceItem}>
                    <div className={styles.serviceIcon}>🎉</div>
                    <div className={styles.serviceContent}>
                      <h3 className={styles.serviceTitle}>Private Events</h3>
                      <p className={styles.serviceText}>
                        Make your private party, wedding, or celebration unforgettable with our 
                        delicious fair food favorites.
                      </p>
                    </div>
                  </div>

                  <div className={styles.serviceItem}>
                    <div className={styles.serviceIcon}>🏢</div>
                    <div className={styles.serviceContent}>
                      <h3 className={styles.serviceTitle}>Corporate Events</h3>
                      <p className={styles.serviceText}>
                        Add excitement to your company picnic, team building event, or corporate 
                        gathering with our mobile concession stand.
                      </p>
                    </div>
                  </div>

                  <div className={styles.serviceItem}>
                    <div className={styles.serviceIcon}>🍴</div>
                    <div className={styles.serviceContent}>
                      <h3 className={styles.serviceTitle}>Catering Services</h3>
                      <p className={styles.serviceText}>
                        Custom catering packages available for events of all sizes. We'll work with 
                        you to create the perfect menu.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.cta}>
                <h2 className={styles.heading}>Let's Work Together</h2>
                <p className={styles.text}>
                  Ready to add Big Bite to your next event? We'd love to hear from you! Contact us 
                  today to discuss your needs and get a custom quote.
                </p>
                <div className={styles.ctaButtons}>
                  <a href="/contact" className={styles.primaryButton}>
                    Get in Touch
                  </a>
                  <a href="tel:8439972666" className={styles.secondaryButton}>
                    Call 843-997-2666
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
