import React from 'react';
import styles from './App.module.css';
import Footer from './component/footer/footer';
import Navbar from './component/navbar/navbar';
import Home from './component/home/home';
import Login from './component/login/login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import List from './component/list/list';

function App({ authService }) {
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
          <Route path='/list' element={<List />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
