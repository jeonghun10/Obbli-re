import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './login.module.css';

const Login = ({ authService }) => {
  console.log(authService);
  const history = useNavigate();
  const goTohome = userId => {
    history('/', { state: { id: userId } });
  };
  const onClick = event => {
    const value = event.currentTarget.innerText;
    authService.login(value).then(result => goTohome(result.user.uid));
  };
  return (
    <div className={styles.login}>
      <section className={styles.header}>
        <h1 className={styles.header_title}>오케스트라 연주자 매칭 서비스</h1>
      </section>
      <ul className={styles.list}>
        <li className={styles.item}>
          <button className={styles.button} onClick={onClick}>
            Google
          </button>
        </li>
        <li className={styles.item}>
          <button className={styles.button} onClick={onClick}>
            Github
          </button>
        </li>
      </ul>
      <section className={styles.footer}>
        <p>여러분의 연주자를 찾아보세요!</p>
      </section>
    </div>
  );
};

export default Login;
