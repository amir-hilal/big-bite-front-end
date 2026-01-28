import { MenuItem } from '../../data/menu';
import styles from './MenuCard.module.css';

interface MenuCardProps {
  item: MenuItem;
}

const MenuCard = ({ item }: MenuCardProps) => {
  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        {item.imagePath ? (
          <img
            src={item.imagePath}
            alt={item.name}
            className={styles.image}
            loading="lazy"
          />
        ) : (
          <div className={styles.placeholder}>
            <span className={styles.placeholderIcon}>🍴</span>
            <span className={styles.placeholderText}>Image Coming Soon</span>
          </div>
        )}
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{item.name}</h3>
        <p className={styles.description}>{item.description}</p>
      </div>
    </article>
  );
};

export default MenuCard;
