import { menuItems } from '../../data/menu';
import MenuCard from '../MenuCard/MenuCard';
import styles from './FeaturedMenu.module.css';

const FeaturedMenu = () => {
  const featuredItems = menuItems.filter((item) => item.featured);

  return (
    <section id="menu" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Featured Menu</h2>
          <p className={styles.subtitle}>
            Discover our most popular festival favorites and street food classics
          </p>
        </div>

        <div className={styles.grid}>
          {featuredItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>

        <div className={styles.footer}>
          <p className={styles.note}>
            All items are made fresh to order. Menu and availability may vary by event.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenu;
