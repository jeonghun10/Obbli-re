import axios from 'axios';
import React, { useEffect } from 'react';
import styles from './list.module.css';

const List = () => {
  useEffect(() => {
    axios
      .get('http://localhost:8000/')
      .then(result => console.log(result))
      .catch(err => console.log(err));
  }, []);
  return (
    <section className={styles.container}>
      <form className={styles.search}>
        <input
          type='text'
          className={styles.input}
          placeholder='지역 또는 악기를 입력해 주세요.'
        />
        <button>검색</button>
      </form>
      <section className={styles.list}>
        <div className={styles.list_menu}>
          <div className={styles.list_menu_date}></div>
          <div className={styles.list_menu_title}></div>
          <div className={styles.list_menu_location}></div>
          <div className={styles.list_menu_name}></div>
        </div>
        <div className={styles.list_item}></div>
      </section>
      ;
    </section>
  );
};

export default List;
