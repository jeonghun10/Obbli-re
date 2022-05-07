import React from 'react';
import styles from './list_item_detail.module.css';
import { useParams } from 'react-router-dom';
import Map from '../map/map';

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
    manageAgcNm,
    price,
    tel,
  } = detailData[0];
  console.log(detailData);
  return (
    <section className={styles.detail}>
      <div className={styles.detail_list}>
        <div className={styles.title}>
          <h1 className={styles.title_name}>{eventNm}</h1>
          <span className={styles.title_diff}>{diff}</span>
        </div>
      </div>
      <table className={styles.table}>
        <tr className={styles.addr}>
          <th>주 소</th>
          <td>{addrRoad}</td>
        </tr>
        <tr className={styles.enterAge}>
          <th>입장 나이</th>
          <td>{enterAge}</td>
        </tr>
        <tr className={styles.eventTerm}>
          <th>기 간</th>
          <td>{`${eventBeginDate} ~ ${eventEndDate}`}</td>
        </tr>

        <tr className={styles.eventVenue}>
          <th>공연 장소</th>
          <td>{eventVenue}</td>
        </tr>
        <tr className={styles.manageAgcNm}>
          <th>주 관</th>
          <td>{manageAgcNm}</td>
        </tr>
        <tr className={styles.price}>
          <th>가 격</th>
          <td>{price}</td>
        </tr>
        <tr className={styles.tel}>
          <th>전화번호</th>
          <td>{tel}</td>
        </tr>
      </table>
      <Map lat={lat} lng={lng}></Map>
    </section>
  );
};

export default List_item_detail;
