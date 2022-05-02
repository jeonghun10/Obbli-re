import React from 'react';
import styles from './footer.module.css';

const Footer = props => {
  return (
    <footer className={styles.footer}>
      <p>
        Copyright © 2021 team pen-pal.<br></br>
        Contact webmaster for more information. 070-1234-5678
      </p>
    </footer>
  );
};

export default Footer;
