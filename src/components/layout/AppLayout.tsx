import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingCallButton from '../FloatingCallButton/FloatingCallButton';
import styles from './AppLayout.module.css';

const AppLayout = () => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default AppLayout;
