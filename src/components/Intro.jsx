import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Ball, BallDown } from '../others';

function Intro() {
  const [isDown, setIsDown] = useState(true);
  const tl = gsap.timeline();

  const titleRef = useRef(null);
  const firstRef = useRef(null);
  const lastRef = useRef(null);

  const firstTarget = useRef(null);
  const secondTarget = useRef(null);
  const thirdTarget = useRef(null);
  const thirdTargetChild = useRef(null);

  const sectionRef = useRef(null);

  const imgMove = (e) => {
    // 마우스 좌표 값
    let mousePageX = e.pageX;
    let mousePageY = e.pageY;

    // 마우스 좌표 값 가운데로 초기화
    // 전체길이 / 2 - 마우스 좌표 값 === 0
    let centerPageX = window.innerWidth / 2 - mousePageX;
    let centerPageY = window.innerHeight / 2 - mousePageY;

    gsap.to(thirdTargetChild.current, {
      duration: 0.5,
      x: centerPageX * 0.09,
      y: centerPageY * 0.09,
      ease: 'power1.out',
    });
  };

  useEffect(() => {
    const canvas = document.querySelector('#canvas');
    // .to(titleRef.current, { duration: 1.5, text: 'PORT <br> FOLIO', ease: 'steps(12)' })

    gsap.set(canvas, { opacity: 0 });
    gsap.set(firstRef.current, { opacity: 0, y: window.innerWidth > 900 ? -50 : -15 });
    gsap.set(lastRef.current, { opacity: 0, y: window.innerWidth > 900 ? 50 : 15 });
    gsap.set(firstTarget.current, { top: window.innerWidth > 900 ? '48%' : '49%', opacity: 0 }); // 주머니
    gsap.set(secondTarget.current, { top: window.innerWidth > 900 ? '35%' : '45%', opacity: 0 }); // 물감통
    gsap.set(thirdTarget.current, { top: window.innerWidth > 900 ? '50vw' : '200vw', opacity: 0, rotate: 0 }); // 핸드폰

    setTimeout(() => {
      setIsDown(false);
      tl.to(canvas, 1.5, { opacity: 1, ease: 'power2.in' });
    }, 2500);

    setTimeout(() => {
      tl.to([firstRef.current, lastRef.current], {
        duration: 0.7,
        opacity: 1,
        y: 0,
        ease: 'power3.out',
      })
        .to([firstTarget.current, secondTarget.current], 0.7, {
          top: 'auto',
          opacity: 1,
          ease: 'slow(0.7, 0.7, false)',
        })
        .to(thirdTarget.current, 1.2, {
          top: 'auto',
          rotate: 0,
          opacity: 1,
          ease: 'power3.in',
        });
    }, 1900);
  }, []);

  return (
    <>
      <section id="intro" onMouseMove={imgMove} ref={sectionRef}>
        {/* {isDown ? <BallDown /> : null} */}
        <BallDown />
        <Ball />
        <div className="intro__inner">
          <h2 ref={titleRef} id="main__title">
            <span ref={firstRef}>PORT</span>
            <span ref={lastRef}>FOLIO</span>
          </h2>
          <div className="myImg" ref={thirdTarget}>
            <img src="image/intro.png" alt="메인페이지 사진입니다." ref={thirdTargetChild} />
          </div>
          <div className="paint" ref={secondTarget}>
            <span className="ir">물감통그림</span>
          </div>
          <div className="pocket" ref={firstTarget}>
            <span className="ir">주머니 그림</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Intro;
