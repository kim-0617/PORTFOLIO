import React, { useEffect, useRef, useState } from 'react';
import { Ball, BallDown } from './';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(MotionPathPlugin, TextPlugin);

function Intro() {
  const [isDown, setIsDown] = useState(true);
  const tl = gsap.timeline();
  const titleRef = useRef(null);

  const firstTarget = useRef(null);
  const secondTarget = useRef(null);
  const thirdTarget = useRef(null);

  const imgMove = (e) => {
    // 마우스 좌표 값
    let mousePageX = e.pageX;
    let mousePageY = e.pageY;

    // 마우스 좌표 값 가운데로 초기화
    // 전체길이 / 2 - 마우스 좌표 값 === 0
    let centerPageX = window.innerWidth / 2 - mousePageX;
    let centerPageY = window.innerHeight / 2 - mousePageY;

    gsap.to(e.target, {
      duration: 0.3,
      x: centerPageX * -0.2,
      y: centerPageY * -0.2,
    });
  }

  useEffect(() => {
    gsap.set(firstTarget.current, { top: 50, opacity: 0 });
    gsap.set(secondTarget.current, { left: 30, top: 30, opacity: 0 });
    gsap.set(thirdTarget.current, { right: -300, opacity: 0, rotate: 140 });

    setTimeout(() => {
      tl.to(firstTarget.current, 0.5, { top: 'auto', opacity: 1 })
        .to(secondTarget.current, 0.5, { top: 'auto', left: 'auto', opacity: 1 })
        .to(thirdTarget.current, 1.5, {
          right: 'auto',
          rotate: 0,
          opacity: 1,
        });
    }, 2000);

    setTimeout(() => {
      setIsDown(false);
    }, 4000);

  }, []);

  useEffect(() => {
    /* 01 */
    gsap.to(titleRef.current, { duration: 2, text: 'PORT <br> FOLIO', ease: 'steps(12)' });
    /* 02 */
    // gsap.to(titleRef.current, {
    //   text: 'PORT <br /> FOLIO',
    //   ease: 'linear',
    //   duration: 3,
    //   repeat: -1,
    //   yoyo: true,
    // });
    /* 03 */
    // const tl = gsap.timeline(),
    //   mySplitText = new SplitText('#main__title', { type: 'words,chars' }),
    //   chars = mySplitText.chars;
    // gsap.set('#main__title', { perspective: 400 });
    // tl.from(chars, { duration: 0.9, opacity: 0, y: 240, transformOrigin: '50% 50%', ease: 'bounce.in', stagger: 0.08 });
    /* 04 */
    // const text = document.querySelector('#main__title');
    // const splitText = (el) => {
    //   el.innerHTML = el.textContent.replace(/(\S*)/g, (m) => {
    //     return `<div class="word">` + m.replace(/(-|#|@)?\S(-|#|@)?/g, "<div class='letter'>$&</div>") + `</div>`;
    //   });
    //   return el;
    // };
    // const split = splitText(text);
    // const br = document.createElement('br');
    // split.querySelector('.word').insertBefore(br, split.querySelector('.word').querySelectorAll('.letter')[4]);
    // function random(min, max) {
    //   return Math.random() * (max - min) + min;
    // }
    // Array.from(split.querySelectorAll('.letter')).forEach((el, idx) => {
    //   gsap.from(el, 2.5, {
    //     opacity: 0,
    //     scale: 0.1,
    //     x: random(-500, 500),
    //     y: random(-500, 500),
    //     z: random(-500, 500),
    //     delay: idx * 0.02,
    //     repeat: 0,
    //   });
    // });
  }, []);

  return (
    <>
      <section id="intro">
        {isDown ? <BallDown /> : <Ball />}
        <div className="intro__inner">
          <h2 ref={titleRef} id="main__title">
            {/* PORT <br /> FOLIO */}
            {/* <span>PORT</span>
          <span>FOLIO</span> */}
          </h2>
          <div className="myImg" ref={thirdTarget} >
            <img src="image/intro.png" alt="메인페이지 사진입니다." onMouseMove={imgMove} />
          </div>
          <div className="paint" ref={secondTarget}>
            <span className="ir">물감통그림</span>
          </div>
          <div className="pocket" ref={firstTarget}>
            <span className="ir">주머니 그림</span>
          </div>
        </div>

        {/* <div className="intro__imgs">
        <div className="left__top">
          <span className="ir">왼쪽 위 사각형 데코레이션</span>
        </div>
        <div className="left__mid">
          <span className="ir">왼쪽 가운데 사각형 데코레이션</span>
        </div>
        <div className="center__mid">
          <span className="ir">가운데쪽 이중 원 데코레이션</span>
        </div>
        <div className="center__right">
          <span className="ir">가운데 오른쪽 원 데코레이션</span>
        </div>
      </div> */}
      </section>
    </>
  );
}

export default Intro;
