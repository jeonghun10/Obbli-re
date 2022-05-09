import React from 'react';
import styles from './loader.module.css';
const Loader = () => {
  return (
    <>
      <div className={styles.loading}></div>
      <div className={styles.title}>데이터를 불러오는 중 입니다. </div>
    </>
  );
};

export default Loader;
