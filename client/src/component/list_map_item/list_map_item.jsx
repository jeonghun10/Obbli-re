import React from 'react';
import styles from './list_map_item.module.css';

const List_map_item = ({ userInfo }) => {
  return (
    <section className={styles.map_list}>
      <table>
        <thead>
          <tr>
            <th>이 름</th>
            <th>제 목</th>
            <th>종료일</th>
          </tr>
        </thead>
        <tbody>
          {userInfo.map(el => {
            return (
              <tr>
                <td>{el.auspiceAgcNm}</td>
                <td>{el.eventNm}</td>
                <td>{el.eventEndDate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default List_map_item;
