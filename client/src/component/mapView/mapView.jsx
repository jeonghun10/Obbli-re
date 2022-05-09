import React, { useEffect, useRef, useState } from 'react';
import styles from './mapView.module.css';
const { kakao } = window;

const MapView = ({ data, dragMapInfo, draggable }) => {
  const mapRef = useRef();
  const initMap = () => {
    const options = {
      center: new kakao.maps.LatLng(data[0].lat, data[0].lng),
      level: 3,
    };
    const map = new kakao.maps.Map(mapRef.current, options);
    const clusterer = new kakao.maps.MarkerClusterer({
      map: map,
      minLevel: 5,
    });
    map.setDraggable(draggable);
    map.setZoomable(draggable);
    const markerData = data.map(el => {
      const markerPosition = new kakao.maps.LatLng(el.lat, el.lng);
      const marker = new kakao.maps.Marker({
        map: map,
        position: markerPosition,
      });
      el.marker = marker;
      marker.setMap(map);
      return marker;
    });
    clusterer.addMarkers(markerData);
    kakao.maps.event.addListener(map, 'idle', function () {
      const bounds = map.getBounds();
      const visibleAdverts = data.filter(el => {
        return bounds.contain(el.marker.getPosition());
      });
      dragMapInfo(visibleAdverts);
    });
  };
  useEffect(() => {
    initMap();
  }, []);
  return <section ref={mapRef} className={styles.map}></section>;
};

export default MapView;
