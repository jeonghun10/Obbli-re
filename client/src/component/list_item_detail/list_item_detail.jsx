import React from 'react';
import styles from './list_item_detail.module.css';
import { useParams } from 'react-router-dom';

const List_item_detail = ({ listData }) => {
  const { id } = useParams();
  let detailData = listData && listData.filter(el => el.id === id);
  console.log(id);
  console.log(listData);
  const {
    addrRoad,
    diff,
    enterAge,
    eventBeginDate,
    eventEndDate,
    eventNm,
    eventVenue,
    lat,
    lng,
    manageAgcNmk,
    price,
    tel,
  } = detailData[0];
  console.log(detailData);
  return (
    <section className={styles.detail}>
      <ul>
        <li className={styles.title}>
          <h1 className={styles.title_name}>{eventNm}</h1>
          <span className={styles.title_diff}>{diff}</span>
        </li>
        <li className={styles.addr}>{addrRoad}</li>
        <li className={styles.enterAge}>{enterAge}</li>
        <li
          className={styles.eventTerm}
        >{`${eventBeginDate} ~ ${eventEndDate}`}</li>
        <li className={styles.eventVenue}>{eventVenue}</li>
        <li className={styles.manageAgcNmk}>{manageAgcNmk}</li>
        <li className={styles.price}>{price}</li>
        <li className={styles.tel}>{tel}</li>
      </ul>
    </section>
  );
};

export default List_item_detail;
