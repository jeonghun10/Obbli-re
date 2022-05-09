import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import List_item from '../list_item/list_item';
import Loader from '../loader/loader';
import styles from './list.module.css';

const List = ({ listData }) => {
  const [dataAll, setDataAll] = useState(listData);
  const [isLoaded, setIsLoaded] = useState(false);
  const [datas, setDatas] = useState([]);
  const observerRef = useRef(null);
  const boxRef = useRef(null);

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    observerRef.current = new IntersectionObserver(intersection, {
      threshold: 1,
    });
    boxRef.current && observerRef.current.observe(boxRef.current);
  }, [datas]);

  const getData = async () => {
    setIsLoaded(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    if (dataAll.length === 0) {
      setIsLoaded(false);
      return;
    }
    setDatas(datas.concat(dataAll.slice(0, 10)));
    setDataAll(dataAll.slice(10));
    setIsLoaded(false);
  };
  const intersection = (entries, io) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        io.unobserve(entry.target);
        getData();
      }
    });
  };

  return (
    <section className={styles.container}>
      <form className={styles.search}>
        <h3 className={styles.search_title}>검색</h3>
        <input
          type='text'
          className={styles.input}
          placeholder='지역 또는 악기를 입력해 주세요.'
        />
        <button>검색</button>
      </form>
      <section className={styles.list}>
        <h3 className={styles.list_title}>진행중인 공연</h3>
        <ul className={styles.list_item}>
          {datas.map(el => {
            return <List_item item={el} key={el.id} />;
          })}
        </ul>
        <div ref={boxRef} className={styles.loading}>
          {isLoaded && <Loader />}
        </div>
      </section>
    </section>
  );
};

export default List;
