import React, { useEffect, useRef, useState } from "react";
import { Selector, Slider } from "./";
import { Swiper, SwiperSlide } from "swiper/react";
import DESC from "../utils/info.json";
import { ChangeContext } from "../context/ChangeContext";

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
  "image/mock/2-3.png",
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
  "image/mock/7-8.png",
  "image/mock/7-9.png",
];

export const mapping = {
  "oneOne ": 0,
  "oneTwo ": 1,
  "oneThree ": 2,
  "oneFour ": 3,
  "twoOne ": 4,
  "twoTwo ": 5,
  "twoThree ": 6,
  "threeOne ": 7,
  "threeTwo ": 8,
  "threeThree ": 9,
  "threeFour ": 10,
  "fourOne ": 11,
  "fourTwo ": 12,
  "fourThree ": 13,
  "fourFour ": 14,
  "fiveOne ": 15,
  "fiveTwo ": 16,
  "sixOne ": 17,
  "sixTwo ": 18,
  "sevenOne ": 19,
  "sevenTwo ": 20,
  "sevenThree ": 21,
  "sevenFour ": 22,
  "sevenFive ": 23,
  "sevenSix ": 24,
  "sevenSeven ": 25,
  "sevenEight ": 26,
  "sevenNine ": 27,
};

export const reverseMapping = {
  0: "oneOne",
  1: "oneTwo",
  2: "oneThree",
  3: "oneFour",
  4: "twoOne",
  5: "twoTwo",
  6: "twoThree",
  7: "threeOne",
  8: "threeTwo",
  9: "threeThree",
  10: "threeFour",
  11: "fourOne",
  12: "fourTwo",
  13: "fourThree",
  14: "fourFour",
  15: "fiveOne",
  16: "fiveTwo",
  17: "sixOne",
  18: "sixTwo",
  19: "sevenOne",
  20: "sevenTwo",
  21: "sevenThree",
  22: "sevenFour",
  23: "sevenFive",
  24: "sevenSix",
  25: "sevenSeven",
  26: "sevenEight",
  27: "sevenNine",
};

const menu = [
  { kr: "웹표준 코딩", en: "standard" },
  { kr: "반응형 사이트", en: "responsive" },
  { kr: "이펙트", en: "effect" },
  { kr: "게임", en: "game" },
  { kr: "PHP", en: "php" },
  { kr: "뷰 사이트", en: "vueSite" },
  { kr: "리액트 사이트", en: "reactSite" },
];

function CodingWork() {
  const [stack, setStack] = useState("Standard");
  const [index, setIndex] = useState(0);

  const swiperRef = useRef(null);
  const menuRef = useRef([]);

  const onClickMenu = (e) => {
    if (e.target.tagName === "A") {
      e.preventDefault();

      [...menuRef.current].forEach((li) => {
        li.className = "";
      });

      const parent = [...menuRef.current][parseInt(e.target.className.replace("menuItem", ""))];
      parent.classList.add("active");

      switch (e.target.innerText) {
        case "웹표준 코딩":
          setStack("Standard");
          parent.classList.add("standard");
          break;
        case "반응형 사이트":
          setStack("Responsive");
          parent.classList.add("responsive");
          break;
        case "이펙트":
          setStack("Effect");
          parent.classList.add("effect");
          break;
        case "게임":
          setStack("Game");
          parent.classList.add("games");
          break;
        case "PHP":
          setStack("Php");
          parent.classList.add("phpSite");
          break;
        case "뷰 사이트":
          setStack("VueSite");
          parent.classList.add("vueSite");
          break;
        case "리액트 사이트":
          setStack("ReactSite");
          parent.classList.add("reactSite");
          break;
        default:
          setStack("Standard");
          break;
      }
    }
  };

  const onActiveIndexChange = function () {
    let i = this.realIndex;
    setIndex(i);

    const menus = [...menuRef.current];

    menus.forEach((li) => {
      li.className = "";
    });

    if (i < 4) {
      setStack("Standard");
      menus[0].classList.add("active", "standard");
    } else if (i < 7) {
      setStack("Responsive");
      menus[1].classList.add("active", "responsive");
    } else if (i < 11) {
      setStack("Effect");
      menus[2].classList.add("active", "effect");
    } else if (i < 15) {
      setStack("Game");
      menus[3].classList.add("active", "games");
    } else if (i < 17) {
      setStack("Php");
      menus[4].classList.add("active", "phpSite");
    } else if (i < 19) {
      setStack("VueSite");
      menus[5].classList.add("active", "vueSite");
    } else {
      setStack("ReactSite");
      menus[6].classList.add("active", "reactSite");
    }
  };

  return (
    <ChangeContext.Provider value={{ index, stack }}>
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
              {menu.map((m, menuIndex) => (
                <li
                  ref={(element) => {
                    menuRef.current[menuIndex] = element;
                  }}
                  key={m.en}
                  className={`${menuIndex === 0 ? "active standard" : ""} `}
                >
                  <a href="#" className={`menuItem${menuIndex}`}>
                    {m.kr}
                  </a>
                </li>
              ))}
            </ul>
            <Selector value={stack} ref={swiperRef} />
          </div>
        </div>
      </article>
    </ChangeContext.Provider>
  );
}

export default CodingWork;
