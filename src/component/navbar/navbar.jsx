import React, { useState } from 'react';
import styles from './navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = props => {
  const [active, setActive] = useState(false);
  let activeBtnStyle = active ? styles.active : '';
  return (
    <section className={styles.home}>
      <nav className={styles.navbar}>
        <img src='/img/logo.png' className={styles.logo} />
        <FontAwesomeIcon
          icon={faBars}
          className={styles.icon}
          onClick={() => {
            setActive(!active);
          }}
        />
        <ul className={`${styles.menu} ${activeBtnStyle}`}>
          <li className={styles.menu_item}>지도로 보기</li>
          <li className={styles.menu_item}>공고 보기</li>
          <li className={styles.menu_item}>로그인</li>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
