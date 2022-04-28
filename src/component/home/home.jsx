import React from 'react';
import styles from './home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapLocationDot,
  faWonSign,
  faMusic,
} from '@fortawesome/free-solid-svg-icons';
const Home = props => {
  return (
    <>
      <section className={styles.section1}>
        <div className={styles.section1_content}>
          <h1 className={styles.section_title}>
            실력 있는 연주자를 찾기 어려웠나요?
          </h1>
          <p className={styles.section_description}>
            Obbli를 이용해 공고를 올려 손쉽게 연주자를 찾고<br></br>
            지도를 통해 공연 장소를 공유할 수 있습니다.
          </p>
          <button className={styles.section_btn}>공고 보러 가기</button>
          <button className={styles.section_btn}>지도에서 보러 가기</button>
        </div>
        <img src='/img/homeImg1.png' className={styles.section1_img} />
      </section>
      <section className={styles.section2}>
        <img src='/img/homeImg2.png' className={styles.section2_img} />
        <div className={styles.section2_content}>
          <h1 className={styles.section_title}>
            갈고 닦은 실력을 뽐내고 싶으신가요?
          </h1>
          <p className={styles.section2_description}>
            Obbli에 올라온 공고를 확인하고 내 위치와 가까운 연주회 장소를 찾을
            수 있습니다.<br></br>간단하게 본인 경력을 입력하여 쉽게 지원할 수
            있습니다.
          </p>
          <button className={styles.section_btn}>공고 보러 가기</button>
          <button className={styles.section_btn}>지도에서 보러 가기</button>
        </div>
      </section>
      <section className={styles.section3}>
        <div className={styles.section3_content}>
          <h1 className={styles.section_title}>
            연주회가 끝난 뒤<br></br>서로에게 리뷰를 남길 수 있습니다.
          </h1>
          <p className={styles.section3_description}>
            Obbli의 리뷰 기능을 통해 서로의 실력을 간단한 코멘트와 함께 남길 수
            있습니다.<br></br>
            남겨진 리뷰를 통해 보다 신뢰감 있는 단체와 연주자를 찾아 볼 수
            있습니다.
          </p>
        </div>
        <img src='/img/homeImg4.png' className={styles.section3_img} />
      </section>
      <section className={styles.section4}>
        <div className={styles.section4_content}>
          <h1 className={styles.section4_title}>Obbli란?</h1>
          <p className={styles.section4_description}>
            오블리란 위치기반 서비스로 오케스트라 단체와 개인을 매칭해주는
            웹서비스 입니다.<br></br> 각각의 리뷰를 통해 신뢰성있는 매칭 결과를
            기대할 수 있습니다.
          </p>
        </div>
        <div className={styles.services}>
          <div className={styles.service}>
            <div>
              <FontAwesomeIcon className={styles.service_icon} icon={faMusic} />
            </div>
            <h2 className={styles.service_title}>오케스트라 정보 제공</h2>
            <p className={styles.service_description}>
              전국 오케스트라 정보와 함께 리뷰를 제공합니다.
            </p>
          </div>
          <div className={styles.service}>
            <FontAwesomeIcon
              icon={faMapLocationDot}
              className={styles.service_icon}
            />
            <h2 className={styles.service_title}>지도 기반 서비스</h2>
            <p className={styles.service_description}>
              카카오지도 API를 이용한 지도 기반 서비스로 내 위치 기준으로 공연장
              공고를 확인해 보세요.
            </p>
          </div>
          <div className={styles.service}>
            <FontAwesomeIcon icon={faWonSign} className={styles.service_icon} />
            <h2 className={styles.service_title}>무료 정보 제공</h2>
            <p className={styles.service_description}>
              Obbli는 찾는데 어떤 비용도 들지 않습니다.
            </p>
          </div>
        </div>

        <img src='/img/homeImg5.png' className={styles.section4_img} />
      </section>
    </>
  );
};

export default Home;
