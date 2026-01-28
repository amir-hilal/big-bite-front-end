import styles from './Hero.module.css';

const Hero = () => {
  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <h1 className={styles.headline}>
            Big Flavor. Big Portions.{' '}
            <span className={styles.highlight}>Big Bite.</span>
          </h1>
          <p className={styles.tagline}>
            Festival-style fair food and street bites for fairs, festivals, and
            private events
          </p>
          <div className={styles.cta}>
            <button onClick={scrollToMenu} className={styles.primaryButton}>
              View Menu
            </button>
            <button
              onClick={scrollToContact}
              className={styles.secondaryButton}
            >
              Contact Us
            </button>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.foodGrid}>
            <div className={styles.foodItem}>🍗</div>
            <div className={styles.foodItem}>🧅</div>
            <div className={styles.foodItem}>🥙</div>
            <div className={styles.foodItem}>🍟</div>
            <div className={styles.foodItem}>🥓</div>
            <div className={styles.foodItem}>🍩</div>
            <div className={styles.foodItem}>🍖</div>
            <div className={styles.foodItem}>🌭</div>
            <div className={styles.foodItem}>🥨</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
