import styles from './Gallery.module.css';

// Placeholder gallery items - user can add actual stand images later
const galleryItems = [
  { id: 1, alt: 'Big Bite concession stand at festival' },
  { id: 2, alt: 'Food preparation area' },
  { id: 3, alt: 'Customers enjoying festival food' },
  { id: 4, alt: 'Concession stand setup' },
];

const Gallery = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>See Us in Action</h2>
          <p className={styles.subtitle}>
            Check out our concession stand and happy customers at events
          </p>
        </div>

        <div className={styles.grid}>
          {galleryItems.map((item) => (
            <div key={item.id} className={styles.imageContainer}>
              <div className={styles.placeholder}>
                <span className={styles.icon}>📸</span>
                <span className={styles.text}>Photo Coming Soon</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
