import React, { useEffect, useState } from 'react';
import List_item from '../list_item/list_item';
import styles from './list.module.css';

const List = ({ listData }) => {
  return (
    <section className={styles.container}>
      <form className={styles.search}>
        <h3 className={styles.search_title}>검색</h3>
        <input
          type='text'
          className={styles.input}
          placeholder='지역 또는 악기를 입력해 주세요.'
        />
        <button>검색</button>
      </form>
      <section className={styles.list}>
        <h3 className={styles.list_title}>진행중인 공연</h3>
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
