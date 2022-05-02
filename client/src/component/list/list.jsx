import axios from 'axios';
import React, { useEffect } from 'react';
import styles from './list.module.css';
import XMLParser from 'react-xml-parser';

const List = () => {
  useEffect(() => {
    axios
      .get(
        'https://api.allorigins.win/get?url=http://apis.data.go.kr/6290000/eventbaseinfo/geteventbaseinfo?serviceKey=cECPlpdsjgQCfRkH8YqoYlNPAyVaHspN6/edAe0v7AsMYSUd56n/ZHwNERkkI/v2Ac2uj6fsVzUXm4HDBzTtNg=='
      )
      .then(result =>
        console.log(
          new XMLParser().parseFromString(result.data.contents).children[1]
            .children
        )
      );
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
