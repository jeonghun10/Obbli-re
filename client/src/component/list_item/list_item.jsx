import React from 'react';
import styles from './list_item.module.css';

const List_item = ({ item }) => {
  const { eventBeginDate, eventNm, eventVenue, manageAgcNm } = item;
  console.log(item);
  return (
    <li className={styles.item}>
      <span className={styles.eventNm}>{eventNm}</span>
      <span className={styles.manageAgcNm}>{manageAgcNm}</span>
      <span className={styles.beginDate}>{eventBeginDate}</span>
    </li>
  );
};

export default List_item;
