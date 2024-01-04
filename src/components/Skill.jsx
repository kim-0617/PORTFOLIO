import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Skill() {
  useEffect(() => {
    let tl = gsap.timeline({
      defaults: {
        ease: "power1.in",
        duration: 1,
      },
    });

    tl.from("#skill h2", 1.8, {
      y: 100,
      opacity: 0,
      ease: "power4.out",
      delay: 1,
      skewY: 4,
      stagger: {
        amount: 0.3,
      },
    });
    ScrollTrigger.create({
      animation: tl,
      trigger: "#skill",
      end: "-=100",
      scrub: 1,
      // pin: true,
    });
  }, []);

  return (
    <article id="skill">
      <h2>WHAT I CAN DO</h2>

      <div className="skill__inner">
        <div className="skill__title">
          코딩에는 확실한 INPUT과 OUTPUT이 있다는게 매력인 것 같습니다. <br />
          그래서 컴퓨터 공학과를 꿈꿨던 것 같습니다. <br />
          C언어를 처음 배우게 됐을 때, <br />
          저는 콘솔에 Hello World가 찍히는 순간이 아직도 기억이 납니다.
          <br />
          항상 초심을 잃지 않고 배우는 자세로 임하겠습니다.
        </div>

        <div className="skill__conts">
          <div className="skill__conts__detail">
            <h3 className="skill__conts__detail__title">자격증</h3>
            <p className="skill__conts__detail__desc">
              정보처리기사 <br />
              컴퓨터 활용능력 1급 <br />
              웹 디자인 기능사 <br />
            </p>
          </div>
          {/* 01 */}

          <div className="skill__conts__detail">
            <h3 className="skill__conts__detail__title">퍼블리싱</h3>
            <p className="skill__conts__detail__desc">
              웹 표준에 따라 마크업이 가능하며, CSS의 여러 중요 속성들을 숙지하고 있으며 SCSS를 즐겨 사용합니다.
            </p>
          </div>
          {/* 02 */}

          <div className="skill__conts__detail">
            <h3 className="skill__conts__detail__title">javascript</h3>
            <p className="skill__conts__detail__desc">
              기본 메서드, 동기, 비동기, 이벤트 루프 등 자바스크립트의 기본 개념에대해 숙지하고 있습니다.
            </p>
          </div>
          {/* 03 */}

          <div className="skill__conts__detail">
            <h3 className="skill__conts__detail__title">
              REACT JS <br /> Nextjs
            </h3>
            <p className="skill__conts__detail__desc">
              React hooks와 함수형 컴포넌트를 사용하여 프론트 개발에 능숙합니다.
            </p>
          </div>
          {/* 05 */}

          <div className="skill__conts__detail">
            <h3 className="skill__conts__detail__title">TYPESCRIPT</h3>
            <p className="skill__conts__detail__desc">
              기본적인 타이핑과 타입정의, 인터페이스를 통해 컴파일 단계에서 오류를 방지할 수 있습니다.
            </p>
          </div>
          {/* 06 */}
        </div>
      </div>
    </article>
  );
}

export default Skill;
