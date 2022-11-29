import React, { useEffect, useRef } from 'react';
import { Ball } from './';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(MotionPathPlugin, TextPlugin);

function Intro() {
  const titleRef = useRef(null);

  useEffect(() => {
    /* 01 */
    // gsap.to(titleRef.current, { duration: 2, text: 'PORT <br> FOLIO', ease: 'circ.in' });

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
    const text = document.querySelector('#main__title');

    const splitText = (el) => {
      el.innerHTML = el.textContent.replace(/(\S*)/g, (m) => {
        return `<div class="word">` + m.replace(/(-|#|@)?\S(-|#|@)?/g, "<div class='letter'>$&</div>") + `</div>`;
      });
      return el;
    };

    const split = splitText(text);
    const br = document.createElement('br');
    split.querySelector('.word').insertBefore(br, split.querySelector('.word').querySelectorAll('.letter')[4]);

    function random(min, max) {
      return Math.random() * (max - min) + min;
    }

    Array.from(split.querySelectorAll('.letter')).forEach((el, idx) => {
      gsap.from(el, 2.5, {
        opacity: 0,
        scale: 0.1,
        x: random(-500, 500),
        y: random(-500, 500),
        z: random(-500, 500),
        delay: idx * 0.02,
        repeat: 0,
      });
    });
  }, []);

  return (
    <section id="intro">
      <Ball />
      <div className="intro__inner">
        <h2 ref={titleRef} id="main__title">
          {/* PORT <br /> FOLIO */}
          <span>PORT</span>
          <span>FOLIO</span>
        </h2>
      </div>

      <div className="intro__imgs">
        <img src="image/intro.png" alt="메인페이지 사진입니다." />
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
        <div className="paint">
          <span className="ir">물감통그림</span>
        </div>
        <div className="pocket">
          <span className="ir">주머니 그림</span>
        </div>
      </div>
    </section>
  );
}

export default Intro;
