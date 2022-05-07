import React, { useEffect, useRef } from 'react';
import styles from './map.module.css';
const { kakao } = window;

const Map = ({ lat, lng }) => {
  const mapRef = useRef(null);
  const initMap = () => {
    const options = {
      center: new kakao.maps.LatLng(lat, lng),
      level: 3,
    };
    const map = new kakao.maps.Map(mapRef.current, options);
    const markerPosition = new kakao.maps.LatLng(lat, lng);
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
    map.setZoomable(false);
  };
  useEffect(() => {
    initMap();
  }, []);

  return <section ref={mapRef} className={styles.map}></section>;
};

export default Map;
