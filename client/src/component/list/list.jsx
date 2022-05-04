import React, { useEffect, useState } from 'react';
import List_item from '../list_item/list_item';
import styles from './list.module.css';

const List = ({ getData }) => {
  const [listData, setListData] = useState([]);
  useEffect(() => {
    getData
      .getData('http://localhost:8000')
      .then(result => setListData(result.data.EventBaseInfo));
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
        <ul className={styles.list_item}>
          {listData.map(el => {
            return <List_item item={el} key={el.id} />;
          })}
        </ul>
      </section>
    </section>
  );
};

export default List;
