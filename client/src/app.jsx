import React, { useEffect, useState } from 'react';
import styles from './App.module.css';
import Footer from './component/footer/footer';
import Navbar from './component/navbar/navbar';
import Home from './component/home/home';
import Login from './component/login/login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import List from './component/list/list';
import List_item_detail from './component/list_item_detail/list_item_detail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import List_map from './component/list_map/list_map';

function App({ authService, getData }) {
  const [listData, setListData] = useState([]);
  const arrowUp = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };
  const diffDate = data => {
    const newArr = [...data];
    newArr.map(el => {
      const masTime = new Date(el.eventEndDate);
      const todayTime = new Date();
      const diff = masTime - todayTime;
      const result = Math.floor(diff / (1000 * 60 * 60 * 24));
      el.diff = result > 0 ? `${result}` : `+${result * -1}`;
    });
    setListData(newArr);
  };

  useEffect(() => {
    getData
      .getData('https://obbli-proxy-test.herokuapp.com/')
      .then(res => diffDate(res.data.EventBaseInfo));
  }, []);
  return (
    <div className={styles.login}>
      <BrowserRouter>
        <Navbar authService={authService} />
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route
            path='/login'
            element={<Login authService={authService} />}
          ></Route>
          <Route
            path='/list'
            element={<List listData={listData} getData={getData} />}
          ></Route>
          <Route
            path='/list/detail/:id'
            element={<List_item_detail listData={listData} />}
          ></Route>
          <Route
            path='/map'
            element={<List_map listData={listData}></List_map>}
          ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
      <FontAwesomeIcon
        icon={faArrowUp}
        className={styles.arrowUp}
        onClick={arrowUp}
      />
    </div>
  );
}

export default App;
