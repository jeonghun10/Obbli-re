import React from 'react';
import styles from './list_map_item.module.css';

const List_map_item = ({ userInfo }) => {
  return (
    <section className={styles.container}>
      <div className={styles.list_map_header}>
        <h3>진행중인 공연</h3>
        <div className={styles.list_map_header_title}>
          <span>주 관</span>
          <span>제 목</span>
          <span>종료일</span>
        </div>
      </div>
      <div className={styles.list_map_table}>
        {userInfo.map(el => {
          return (
            <tr key={el.id}>
              <td>{el.auspiceAgcNm}</td>
              <td>{el.eventNm}</td>
              <td>{el.eventEndDate}</td>
            </tr>
          );
        })}
      </div>
    </section>
  );
};

export default List_map_item;
