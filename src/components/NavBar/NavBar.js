import React from 'react';
import Container from '../Container/Container';
import styles from './NavBar.module.scss';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Container>
        <div className={styles.navbarContent}>
          <Link to="/" className={styles.iconLink}>
            <span className="fa fa-tasks"></span>
          </Link>
          <ul className={styles.navList}>
            <li className={styles.navLink}>
              <Link to="/">Home</Link>
            </li>
            <li className={styles.navLink}>
              <Link to="/favorite">Favorite</Link>
            </li>
            <li className={styles.navLink}>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar