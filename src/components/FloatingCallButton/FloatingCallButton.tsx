import styles from './FloatingCallButton.module.css';

const FloatingCallButton = () => {
  return (
    <a
      href="tel:8439972666"
      className={styles.floatingButton}
      aria-label="Call Big Bite Concession at 843-997-2666"
    >
      <span className={styles.icon}>📞</span>
      <span className={styles.text}>Call Now</span>
    </a>
  );
};

export default FloatingCallButton;
