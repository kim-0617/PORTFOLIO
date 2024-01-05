import React from "react";

function CodingWorkList() {
  return (
    <article id="CodingWorkList">
      <h2>Work coding</h2>
      <p>작업물을 목록형으로 보여드립니다.</p>
      <div className="CodingWorkList__inner">
        <div className="list__conts">
          <div className="list__conts__detail">
            <h3 className="list__conts__detail__title">JS Effect</h3>
            <ul className="list__conts__detail__desc">
              <li>
                <a
                  target="_blank"
                  className=""
                  href="https://kim-0617.github.io/codingclass/javascript/effect/quizEffect06.html"
                >
                  <span>퀴즈 이펙트</span>
                  <span className="sf" style={{ visibility: "hidden" }}>
                    space
                  </span>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  className=""
                  href="https://kim-0617.github.io/codingclass/javascript/effect/sliderEffect07.html"
                >
                  <span>슬라이더 이펙트</span>
                  <span className="sf" style={{ visibility: "hidden" }}>
                    space
                  </span>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  className=""
                  href="https://kim-0617.github.io/codingclass/javascript/effect/mouseEffect06.html"
                >
                  <span>마우스 이펙트</span>
                  <span className="sf" style={{ visibility: "hidden" }}>
                    space
                  </span>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  className=""
                  href="https://kim-0617.github.io/codingclass/javascript/effect/parallaxEffect07.html"
                >
                  <span>페럴렉스 이펙트</span>
                  <span className="sf" style={{ visibility: "hidden" }}>
                    space
                  </span>
                </a>
              </li>
            </ul>
          </div>
          {/* 01 */}

          <div className="list__conts__detail">
            <h3 className="list__conts__detail__title">리액트</h3>
            <ul className="list__conts__detail__desc">
              <li>
                <a target="_blank" className="" href="https://github.com/kim-0617/sh-notepad">
                  <span>메모장 앱 (웹뷰)</span>
                  <span className="sf">(typescript, firebase, Webview app with flutter)</span>
                </a>
              </li>
              <li>
                <a target="_blank" className="" href="https://github.com/kim-0617/react-dash-board">
                  <span>리액트 Dash board</span>
                  <span className="sf">(react syncfusion, tailwind)</span>
                </a>
              </li>
              <li>
                <a target="_blank" className="" href="https://cra02.netlify.app/">
                  <span>API SITE</span>
                  <span className="sf">(Youtube, TMDB, Unsplash) - Rapid api 이용</span>
                </a>
              </li>
            </ul>
          </div>
          {/* 02 */}

          <div className="list__conts__detail">
            <h3 className="list__conts__detail__title">리액트 02</h3>
            <ul className="list__conts__detail__desc">
              <li>
                <a target="_blank" className="" href="https://github.com/kim-0617/fit-club-app">
                  <span>Fit club app</span>
                  <span className="sf">react, tailwind, typescript, rapid api</span>
                </a>
              </li>
              <li>
                <a target="_blank" className="" href="https://github.com/kim-0617/ai_summarizer">
                  <span>ai_summarizer (요약기능)</span>
                  <span className="sf">(react, typescript, tailwind, rapid api, vite)</span>
                </a>
              </li>
            </ul>
          </div>
          {/* 03 */}

          <div className="list__conts__detail">
            <h3 className="list__conts__detail__title">리액트 03</h3>
            <ul className="list__conts__detail__desc">
              <li>
                <a target="_blank" className="" href="https://github.com/kim-0617/fitness-info">
                  <span>rapid api를 활용하여 만든 fitness app</span>
                  <span className="sf">(react, rapid api)</span>
                </a>
              </li>
              <li>
                <a target="_blank" className="" href="https://github.com/kim-0617/bank_modern_app">
                  <span>bank morden app</span>
                  <span className="sf">(react, rapid api, vite)</span>
                </a>
              </li>
            </ul>
          </div>
          {/* 04 */}
        </div>
      </div>
    </article>
  );
}

export default CodingWorkList;
