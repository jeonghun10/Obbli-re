import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import List_item from '../list_item/list_item';
import Loader from '../loader/loader';
import styles from './list.module.css';

const List = ({ listData }) => {
  const [dataAll, setDataAll] = useState(listData);
  const [target, setTarget] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [datas, setDatas] = useState([]);
  const getMoreItem = async () => {
    setIsLoaded(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setDataAll(dataAll.slice(10));
    setDatas(datas.concat(dataAll.slice(0, 10)));
    setIsLoaded(false);
  };
  const onIntersect = async ([entry], observer) => {
    if (entry.isIntersecting && !isLoaded) {
      observer.unobserve(entry.target);
      await getMoreItem();
      observer.observe(entry.target);
    }
  };
  console.log(datas);
  useEffect(() => {
    let observer;
    if (target) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0.4,
      });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target, dataAll]);

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
          <div ref={setTarget} className={styles.loading}>
            {isLoaded && <Loader />}
          </div>
        </ul>
      </section>
    </section>
  );
};

export default List;
