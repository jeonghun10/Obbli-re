import React, { useState } from 'react';
import List_map_item from '../list_map_item/list_map_item';
import MapView from '../mapView/mapView';
import styles from './list_map.module.css';
const List_map = ({ listData }) => {
  const [userInfo, setUserInfo] = useState([]);
  const dragMapInfo = data => {
    setUserInfo(data);
  };
  return (
    <section className={styles.list_map}>
      <MapView data={listData} dragMapInfo={dragMapInfo} draggable={true} />
      <List_map_item userInfo={userInfo} />
    </section>
  );
};

export default List_map;
