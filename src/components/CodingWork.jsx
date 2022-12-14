import React, { useRef, useState } from 'react';
import { Selector, Slider } from './';
import { Swiper, SwiperSlide } from 'swiper/react';
import DESC from '../utils/info.json';
import { ChangeContext } from '../context/ChangeContext';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/bundle';

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper';

const type = [
  'image/mock/1-1.png',
  'image/mock/1-2.png',
  'image/mock/1-3.png',
  'image/mock/1-4.png',
  'image/mock/2-1.png',
  'image/mock/2-2.png',
  'image/mock/2-3.png',
  'image/mock/3-1.png',
  'image/mock/3-2.png',
  'image/mock/3-3.png',
  'image/mock/3-4.png',
  'image/mock/4-1.png',
  'image/mock/4-2.png',
  'image/mock/4-3.png',
  'image/mock/4-4.png',
  'image/mock/5-1.png',
  'image/mock/5-2.png',
  'image/mock/6-1.png',
  'image/mock/6-2.png',
  'image/mock/7-1.png',
  'image/mock/7-2.png',
  'image/mock/7-3.png',
  'image/mock/7-4.png',
  'image/mock/7-5.png',
  'image/mock/7-6.png',
  'image/mock/7-7.png',
  'image/mock/7-8.png',
  'image/mock/7-9.png',
];

export const mapping = {
  'oneOne ': 0,
  'oneTwo ': 1,
  'oneThree ': 2,
  'oneFour ': 3,
  'twoOne ': 4,
  'twoTwo ': 5,
  'twoThree ': 6,
  'threeOne ': 7,
  'threeTwo ': 8,
  'threeThree ': 9,
  'threeFour ': 10,
  'fourOne ': 11,
  'fourTwo ': 12,
  'fourThree ': 13,
  'fourFour ': 14,
  'fiveOne ': 15,
  'fiveTwo ': 16,
  'sixOne ': 17,
  'sixTwo ': 18,
  'sevenOne ': 19,
  'sevenTwo ': 20,
  'sevenThree ': 21,
  'sevenFour ': 22,
  'sevenFive ': 23,
  'sevenSix ': 24,
  'sevenSeven ': 25,
  'sevenEight ': 26,
  'sevenNine ': 27,
};

export const reverseMapping = {
  0: 'oneOne',
  1: 'oneTwo',
  2: 'oneThree',
  3: 'oneFour',
  4: 'twoOne',
  5: 'twoTwo',
  6: 'twoThree',
  7: 'threeOne',
  8: 'threeTwo',
  9: 'threeThree',
  10: 'threeFour',
  11: 'fourOne',
  12: 'fourTwo',
  13: 'fourThree',
  14: 'fourFour',
  15: 'fiveOne',
  16: 'fiveTwo',
  17: 'sixOne',
  18: 'sixTwo',
  19: 'sevenOne',
  20: 'sevenTwo',
  21: 'sevenThree',
  22: 'sevenFour',
  23: 'sevenFive',
  24: 'sevenSix',
  25: 'sevenSeven',
  26: 'sevenEight',
  27: 'sevenNine',
};

function CodingWork() {
  const [stack, setStack] = useState('Standard');
  const [index, setIndex] = useState(0);
  const swiperRef = useRef(null);

  const onClickMenu = (e) => {
    if (e.target.tagName === 'A') {
      e.preventDefault();
      document.querySelectorAll('.menu__list li').forEach((li) => {
        li.className = '';
      });
      e.target.parentElement.classList.add('active');
      switch (e.target.innerText) {
        case '????????? ??????':
          setStack('Standard');
          e.target.parentElement.classList.add('standard');
          break;
        case '????????? ?????????':
          setStack('Responsive');
          e.target.parentElement.classList.add('responsive');
          break;
        case '?????????':
          setStack('Effect');
          e.target.parentElement.classList.add('effect');
          break;
        case '??????':
          setStack('Game');
          e.target.parentElement.classList.add('games');
          break;
        case 'PHP':
          setStack('Php');
          e.target.parentElement.classList.add('phpSite');
          break;
        case '??? ?????????':
          setStack('VueSite');
          e.target.parentElement.classList.add('vueSite');
          break;
        case '????????? ?????????':
          setStack('ReactSite');
          e.target.parentElement.classList.add('reactSite');
          break;
        default:
          setStack('Standard');
          break;
      }
    }
  };

  const onActiveIndexChange = function () {
    let i = this.realIndex;
    setIndex(i);

    document.querySelectorAll('.menu__list li').forEach((li) => {
      li.className = '';
    });

    if (i < 4) {
      setStack('Standard');
      document.querySelectorAll('.menu__list li')[0].classList.add('active', 'standard');
    } else if (i < 7) {
      setStack('Responsive');
      document.querySelectorAll('.menu__list li')[1].classList.add('active', 'responsive');
    } else if (i < 11) {
      setStack('Effect');
      document.querySelectorAll('.menu__list li')[2].classList.add('active', 'effect');
    } else if (i < 15) {
      setStack('Game');
      document.querySelectorAll('.menu__list li')[3].classList.add('active', 'games');
    } else if (i < 17) {
      setStack('Php');
      document.querySelectorAll('.menu__list li')[4].classList.add('active', 'phpSite');
    } else if (i < 19) {
      setStack('VueSite');
      document.querySelectorAll('.menu__list li')[5].classList.add('active', 'vueSite');
    } else {
      setStack('ReactSite');
      document.querySelectorAll('.menu__list li')[6].classList.add('active', 'reactSite');
    }
  };

  return (
    <ChangeContext.Provider value={{ index, stack }}>
      <article id="CodingWork">
        <h2>Work coding</h2>
        <p>???????????? ???????????? ???????????? ??????????????????.</p>
        <div className="CodingWork__inner">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 10,
              stretch: 100,
              depth: 500,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            ref={swiperRef}
            onActiveIndexChange={onActiveIndexChange}
            className="mySwiper"
          >
            {type.map((x, i) => (
              <SwiperSlide key={x}>
                <Slider src={x} index={i} data={DESC.items[i]} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="menu">
            <ul className="menu__list" onClick={onClickMenu}>
              <li className="standard active">
                <a href="#">????????? ??????</a>
              </li>
              <li>
                <a href="#">????????? ?????????</a>
              </li>
              <li>
                <a href="#">?????????</a>
              </li>
              <li>
                <a href="#">??????</a>
              </li>
              <li>
                <a href="#">PHP</a>
              </li>
              <li>
                <a href="#">??? ?????????</a>
              </li>
              <li>
                <a href="#">????????? ?????????</a>
              </li>
            </ul>
            <Selector value={stack} ref={swiperRef} />
          </div>
        </div>
      </article>
    </ChangeContext.Provider>
  );
}

export default CodingWork;
