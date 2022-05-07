import React, { useEffect, useState, memo } from 'react';
import styles from './navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, Link, useLocation } from 'react-router-dom';

const Navbar = memo(({ authService }) => {
  const [active, setActive] = useState(false);
  let activeBtnStyle = active ? styles.active : '';
  const userId = useLocation().state;
  const history = useNavigate();
  const onClick = () => {
    if (userId) {
      authService.logout();
    }
    history('/login');
  };

  return (
    <section className={styles.home}>
      <nav className={styles.navbar}>
        <Link to='/'>
          <img src='/img/logo.png' className={styles.logo} value={'/'} />
        </Link>
        <FontAwesomeIcon
          icon={faBars}
          className={styles.icon}
          onClick={() => {
            setActive(!active);
          }}
          onBlur={() => {
            setActive(false);
          }}
        />
        <ul
          className={`${styles.menu} ${activeBtnStyle}`}
          onClick={() => setActive(!active)}
        >
          <Link to='/list'>
            <li className={styles.menu_item} value='list'>
              공고 보기
            </li>
          </Link>
          <Link to='/map'>
            <li className={styles.menu_item}>지도로 보기</li>
          </Link>
          <li className={styles.menu_item} onClick={onClick}>
            {userId ? '로그아웃' : '로그인'}
          </li>
        </ul>
      </nav>
    </section>
  );
});

export default Navbar;
