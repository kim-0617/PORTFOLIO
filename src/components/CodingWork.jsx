import React, { useRef, useState } from 'react';
import { Selector, Slider } from './';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/bundle";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper";

const type = [
  "image/mock/1-1.png",
  "image/mock/1-2.png",
  "image/mock/1-3.png",
  "image/mock/1-4.png",
  "image/mock/2-1.png",
  "image/mock/2-2.png",
  "image/mock/3-1.png",
  "image/mock/3-2.png",
  "image/mock/3-3.png",
  "image/mock/3-4.png",
  "image/mock/4-1.png",
  "image/mock/4-2.png",
  "image/mock/4-3.png",
  "image/mock/4-4.png",
  "image/mock/5-1.png",
  "image/mock/5-2.png",
  "image/mock/6-1.png",
  "image/mock/6-2.png",
  "image/mock/7-1.png",
  "image/mock/7-2.png",
  "image/mock/7-3.png",
  "image/mock/7-4.png",
  "image/mock/7-5.png",
  "image/mock/7-6.png",
  "image/mock/7-7.png",
];

export const mapping = {
  'oneOne': 0,
  'oneTwo': 1,
  'oneThree': 2,
  'oneFour': 3,
  'twoOne': 4,
  'twoTwo': 5,
  'threeOne': 6,
  'threeTwo': 7,
  'threeThree': 8,
  'threeFour': 9,
  'fourOne': 10,
  'fourTwo': 11,
  'fourThree': 12,
  'fourFour': 13,
  'fiveOne': 14,
  'fiveTwo': 15,
  'sixOne': 16,
  'sixTwo': 17,
  'sevenOne': 18,
  'sevenTwo': 19,
  'sevenThree': 20,
  'sevenFour': 21,
  'sevenFive': 22,
  'sevenSix': 23,
  'sevenSeven': 24,
}

function CodingWork() {
  const [stack, setStack] = useState('Standard');
  const swiperRef = useRef(null);

  const onClickMenu = (e) => {
    if (e.target.tagName === 'A') {
      e.preventDefault();
      document.querySelectorAll('.menu__list li').forEach((li) => {
        li.classList.remove('active');
      });
      e.target.parentElement.classList.add('active');
      switch (e.target.innerText) {
        case '웹표준 코딩':
          setStack('Standard');
          break;
        case '반응형 사이트':
          setStack('Responsive');
          break;
        case '이펙트':
          setStack('Effect');
          break;
        case '게임':
          setStack('Game');
          break;
        case 'PHP':
          setStack('Php');
          break;
        case '뷰 사이트':
          setStack('VueSite');
          break;
        case '리액트 사이트':
          setStack('ReactSite');
          break;
        default:
          setStack('Standard');
          break;
      }
    }
  };

  return (
    <article id="CodingWork">
      <h2>Work coding</h2>
      <p>작업물을 슬라이드 형식으로 보여드립니다.</p>
      <div className="CodingWork__inner">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 30,
            stretch: 100,
            depth: 500,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          ref={swiperRef}
          className="mySwiper"
        >
          {type.map((x, i) =>
          (<SwiperSlide key={x}>
            <Slider src={x} index={i} />
          </SwiperSlide>))}
        </Swiper>

        <div className="menu">
          <ul className="menu__list" onClick={onClickMenu}>
            <li className="active">
              <a href="#">웹표준 코딩</a>
            </li>
            <li>
              <a href="#">반응형 사이트</a>
            </li>
            <li>
              <a href="#">이펙트</a>
            </li>
            <li>
              <a href="#">게임</a>
            </li>
            <li>
              <a href="#">PHP</a>
            </li>
            <li>
              <a href="#">뷰 사이트</a>
            </li>
            <li>
              <a href="#">리액트 사이트</a>
            </li>
          </ul>
          <Selector value={stack} ref={swiperRef} />
        </div>
      </div>
    </article>
  );
}

export default CodingWork;
