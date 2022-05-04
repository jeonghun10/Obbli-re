import React from 'react';
import styles from './list_item_detail.module.css';
import { useParams } from 'react-router-dom';

const List_item_detail = ({ listData }) => {
  const { id } = useParams();
  const detailData = listData.filter(el => el.id === id);
  return (
    <section className={styles.detail}>
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ullam
        magni magnam saepe qui voluptatum ratione. Eius recusandae esse qui ea
        doloremque tempora. Nisi sit alias consectetur voluptas, distinctio
        modi!
      </>
    </section>
  );
};

export default List_item_detail;
