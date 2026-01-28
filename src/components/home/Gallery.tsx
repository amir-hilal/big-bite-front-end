import styles from './Gallery.module.css';

const galleryItems = [
  {
    id: 1,
    src: '/gallery/stand-setup-front.png',
    alt: 'Big Bite concession stand at festival',
  },
  {
    id: 2,
    src: '/gallery/stand-setup-side.png',
    alt: 'Big Bite food stand setup',
  },
  { id: 3, alt: 'Photo coming soon' },
  { id: 4, alt: 'Photo coming soon' },
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
              {item.src ? (
                <img
                  src={item.src}
                  alt={item.alt}
                  className={styles.image}
                  loading="lazy"
                />
              ) : (
                <div className={styles.placeholder}>
                  <span className={styles.icon}>📸</span>
                  <span className={styles.text}>Photo Coming Soon</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
