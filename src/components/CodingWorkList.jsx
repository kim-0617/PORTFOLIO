import React from 'react';

function CodingWorkList() {
  return (
    <article id="CodingWorkList">
      <h2>Work coding</h2>
      <p>작업물을 목록형으로 보여드립니다.</p>
      <div className="CodingWorkList__inner">
        <div className="list__conts">
          <div className="list__conts__detail">
            <h3 className="list__conts__detail__title">웹 표준 사이트</h3>
            <ul className="list__conts__detail__desc">
              <li>
                <a target="_blank" href="https://kim-0617.github.io/codingclass/site/site1.1/index.html">
                  사이트 01
                </a>
              </li>
              <li>
                <a target="_blank" href="https://kim-0617.github.io/codingclass/site/site1.2/index.html">
                  사이트 02
                </a>
              </li>
              <li>
                <a target="_blank" href="https://kim-0617.github.io/codingclass/site/site1.4/index.html">
                  사이트 03
                </a>
              </li>
              <li>
                <a target="_blank" href="https://kim0617.tistory.com/category/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98">
                  알고리즘
                </a>
              </li>
            </ul>
          </div>
          {/* 01 */}

          <div className="list__conts__detail">
            <h3 className="list__conts__detail__title">게임</h3>
            <ul className="list__conts__detail__desc">
              <li>
                <a target="_blank" href="https://kim-0617.github.io/codingclass/javascript/effect/gameEffect01.html">
                  테트리스 게임
                </a>
              </li>
              <li className="checknone">
                <a target="_blank" href="https://kim-0617.github.io/codingclass/javascript/effect/gameEffect01.html">
                  CSS 속성 서치 게임
                </a>
              </li>
              <li className="checknone">
                <a target="_blank" href="https://kim-0617.github.io/codingclass/javascript/effect/gameEffect01.html">
                  메모리 카드 게임
                </a>
              </li>
              <li className="checknone">
                <a target="_blank" href="https://kim-0617.github.io/codingclass/javascript/effect/gameEffect01.html">
                  뮤직 플레이어
                </a>
              </li>
            </ul>
          </div>
          {/* 02 */}

          <div className="list__conts__detail">
            <h3 className="list__conts__detail__title">반응형 사이트</h3>
            <ul className="list__conts__detail__desc">
              <li>
                <a target="_blank" href="https://kim-0617.github.io/codingclass/site/site2-prev/index.html">
                  반응형 사이트 01
                </a>
              </li>
              <li>
                <a target="_blank" href="https://kim-0617.github.io/codingclass/site/site1-responsive/index.html">
                  반응형 사이트 02
                </a>
              </li>
            </ul>
          </div>
          {/* 03 */}

          <div className="list__conts__detail">
            <h3 className="list__conts__detail__title">PHP</h3>
            <ul className="list__conts__detail__desc">
              <li>
                <a target="_blank" href="http://als1702.dothome.co.kr/php/main/main.php">
                  PHP BLOG
                </a>
              </li>
              <li>
                <a target="_blank" href="http://kkk5993.dothome.co.kr/">
                  PHP SITE
                </a>
              </li>
            </ul>
          </div>
          {/* 04 */}

          <div className="list__conts__detail">
            <h3 className="list__conts__detail__title">웹 표준 사이트</h3>
            <ul className="list__conts__detail__desc">
              <li>
                <a target="_blank" href="https://kim-0617.github.io/codingclass/javascript/effect/quizEffect06.html">
                  퀴즈 이펙트
                </a>
              </li>
              <li>
                <a target="_blank" href="https://kim-0617.github.io/codingclass/javascript/effect/sliderEffect07.html">
                  슬라이더 이펙트
                </a>
              </li>
              <li>
                <a target="_blank" href="https://kim-0617.github.io/codingclass/javascript/effect/mouseEffect06.html">
                  마우스 이펙트
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://kim-0617.github.io/codingclass/javascript/effect/parallaxEffect07.html"
                >
                  페럴렉스 이펙트
                </a>
              </li>
            </ul>
          </div>
          {/* 05 */}

          <div className="list__conts__detail">
            <h3 className="list__conts__detail__title">리액트</h3>
            <ul className="list__conts__detail__desc">
              <li>
                <a target="_blank" href="https://github.com/kim-0617/sleact/tree/main/alecture">
                  슬랙 클론코딩
                </a>
              </li>
              <li>
                <a target="_blank" href="https://github.com/kim-0617/react-blog">
                  리액트 블로그
                </a>
              </li>
              <li>
                <a target="_blank" href="https://cra02.netlify.app/">
                  API SITE
                </a>
              </li>
              <li>
                <a target="_blank" href="https://mydiary-f4e5d.web.app/login">
                  리액트 파이어 베이스
                </a>
              </li>
            </ul>
          </div>
          {/* 06 */}
        </div>
      </div>
    </article>
  );
}

export default CodingWorkList;
