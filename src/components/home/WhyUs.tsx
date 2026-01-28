import styles from './WhyUs.module.css';

const reasons = [
  {
    id: 1,
    icon: '⚡',
    title: 'Fast Service',
    description: 'Quick preparation without compromising quality. Perfect for high-traffic events.',
  },
  {
    id: 2,
    icon: '🎪',
    title: 'Festival Favorites',
    description: 'Authentic fair food that brings the carnival experience to any event.',
  },
  {
    id: 3,
    icon: '🍽️',
    title: 'Big Portions',
    description: 'Generous servings that satisfy hungry crowds and leave guests happy.',
  },
  {
    id: 4,
    icon: '✨',
    title: 'Fresh Ingredients',
    description: 'Made-to-order with quality ingredients. Nothing pre-made or frozen.',
  },
  {
    id: 5,
    icon: '🚚',
    title: 'Event Ready',
    description: 'Full concession setup for any venue. We bring everything needed.',
  },
];

const WhyUs = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Why Choose Big Bite?</h2>
          <p className={styles.subtitle}>
            We make your event unforgettable with delicious food and professional service
          </p>
        </div>

        <div className={styles.grid}>
          {reasons.map((reason) => (
            <article key={reason.id} className={styles.card}>
              <div className={styles.iconContainer}>
                <span className={styles.icon}>{reason.icon}</span>
              </div>
              <h3 className={styles.cardTitle}>{reason.title}</h3>
              <p className={styles.cardDescription}>{reason.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
