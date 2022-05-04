import React from 'react';
import styles from './list_item.module.css';

const DEFAULT_IMG = '/img/user.png';
const List_item = ({ item }) => {
  const { eventBeginDate, eventNm, eventVenue, manageAgcNm, imgUrl, diff } =
    item;
  const defaultImage = imgUrl || DEFAULT_IMG;
  return (
    <li className={styles.item}>
      <div className={styles.diffDay}>{diff}</div>
      <img src={defaultImage} alt='' className={styles.img} />
      <div className={styles.eventNm}>{eventNm}</div>
      <div className={styles.manageAgcNm}>{manageAgcNm}</div>
      <div className={styles.beginDate}>{eventBeginDate}</div>
    </li>
  );
};

export default List_item;
