import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Ball, BallDown } from '../others';

function Intro() {
  const [isDown, setIsDown] = useState(true);
  const [isDone, setIsDone] = useState(false);
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
    if (isDone) return;

    /** 텍스트 쪽 애니메이션 */
    const canvas = document.querySelector('#canvas');
    // .to(titleRef.current, { duration: 1.5, text: 'PORT <br> FOLIO', ease: 'steps(12)' })

    gsap.set(canvas, { opacity: 0 });
    gsap.set(firstRef.current, { opacity: 0, y: window.innerWidth > 900 ? -50 : -15 });
    gsap.set(lastRef.current, { opacity: 0, y: window.innerWidth > 900 ? 50 : 15 });
    gsap.set(firstTarget.current, { y: window.innerWidth > 900 ? '10%' : '10%', opacity: 0 }); // 주머니
    gsap.set(secondTarget.current, { y: window.innerWidth > 900 ? '-5%' : '-15%', opacity: 0 }); // 물감통
    gsap.set(thirdTarget.current, { top: window.innerWidth > 900 ? '50vw' : '200vw', opacity: 0, rotate: 0 }); // 핸드폰

    setTimeout(() => {
      setIsDone(true);
    }, 3500);

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
          y: 'auto',
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

  useEffect(() => {
    if (!isDone) return;

    /** 이미지 움직이기*/
    const images = [...document.querySelectorAll('.mouse__target')];

    const lerp = (a, b, n) => (1 - n) * a + n * b;
    const map = (x, a, b, c, d) => ((x - a) * (d - c)) / (b - a) + c;

    const getMousePosition = (e) => {
      let posX = e.clientX;
      let posY = e.clientY;

      return {
        x: posX,
        y: posY,
      };
    };

    let mousePos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    window.addEventListener('mousemove', (e) => (mousePos = getMousePosition(e)));

    gsap.fromTo(
      '.mouse__target',
      {
        ease: 'power3.inOut',
      },
      {
        stagger: 0.1,
        duration: 2.5,
      },
    );

    images.forEach((img) => {
      let values = { x: 0, y: 0 };
      const xStart = gsap.utils.random(16, 64);
      const yStart = gsap.utils.random(-16, 64);

      const render = () => {
        values.x = lerp(values.x, map(mousePos.x, 0, window.innerWidth, -xStart, xStart), 0.07);

        values.y = lerp(values.y, map(mousePos.y, 0, window.innerHeight, -yStart, yStart), 0.07);
        gsap.set(img, { x: values.x, y: values.y });

        requestAnimationFrame(render);
      };
      render();
    });
  }, [isDone]);

  return (
    <>
      <section id="intro" ref={sectionRef}>
        {isDown ? <BallDown /> : null}
        <Ball />
        <div className="intro__inner">
          <h2 ref={titleRef} id="main__title" className="mouse__target">
            <span ref={firstRef}>PORT</span>
            <span ref={lastRef}>FOLIO</span>
          </h2>
          <div className="myImg mouse__target" ref={thirdTarget}>
            <img src="image/intro.png" alt="메인페이지 사진입니다." ref={thirdTargetChild} />
          </div>
          <div className="paint mouse__target" ref={secondTarget}>
            <span className="ir">물감통그림</span>
          </div>
          <div className="pocket mouse__target" ref={firstTarget}>
            <span className="ir">주머니 그림</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Intro;
