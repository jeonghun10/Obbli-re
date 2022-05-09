import React from 'react';
import styles from './list_item.module.css';
import { Link } from 'react-router-dom';

const DEFAULT_IMG = '/img/user.png';
const List_item = ({ item }) => {
  const { eventBeginDate, eventNm, manageAgcNm, imgUrl, diff, id } = item;
  const defaultImage = imgUrl || DEFAULT_IMG;

  return (
    <li className={styles.item}>
      <Link to={`detail/${id}`}>
        <div className={styles.diffDay}>{`D${diff}`}</div>
        <img src={defaultImage} alt='' className={styles.img} />
        <div className={styles.eventNm}>{eventNm}</div>
        <div className={styles.manageAgcNm}>{manageAgcNm}</div>
        <div className={styles.beginDate}>{eventBeginDate}</div>
      </Link>
    </li>
  );
};

export default List_item;
