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
                <a href="#">사이트 01</a>
              </li>
              <li>
                <a href="#">사이트 02</a>
              </li>
              <li>
                <a href="#">사이트 03</a>
              </li>
              <li>
                <a href="#">알고리즘</a>
              </li>
            </ul>
          </div>
          {/* 01 */}

          <div className="list__conts__detail">
            <h3 className="list__conts__detail__title">게임</h3>
            <ul className="list__conts__detail__desc">
              <li>
                <a href="#">테트리스 게임</a>
              </li>
              <li>
                <a href="#">CSS 속성 서치 게임</a>
              </li>
              <li>
                <a href="#">메모리 카드 게임</a>
              </li>
              <li>
                <a href="#">뮤직 플레이어</a>
              </li>
            </ul>
          </div>
          {/* 02 */}

          <div className="list__conts__detail">
            <h3 className="list__conts__detail__title">반응형 사이트</h3>
            <ul className="list__conts__detail__desc">
              <li>
                <a href="#">반응형 사이트 01</a>
              </li>
              <li>
                <a href="#">반응형 사이트 02</a>
              </li>
            </ul>
          </div>
          {/* 03 */}

          <div className="list__conts__detail">
            <h3 className="list__conts__detail__title">PHP</h3>
            <ul className="list__conts__detail__desc">
              <li>
                <a href="#">PHP BLOG</a>
              </li>
              <li>
                <a href="#">PHP SITE</a>
              </li>
            </ul>
          </div>
          {/* 04 */}

          <div className="list__conts__detail">
            <h3 className="list__conts__detail__title">웹 표준 사이트</h3>
            <ul className="list__conts__detail__desc">
              <li>
                <a href="#">퀴즈 이펙트</a>
              </li>
              <li>
                <a href="#">슬라이더 이펙트</a>
              </li>
              <li>
                <a href="#">마우스 이펙트</a>
              </li>
              <li>
                <a href="#">페럴렉스 이펙트</a>
              </li>
            </ul>
          </div>
          {/* 05 */}

          <div className="list__conts__detail">
            <h3 className="list__conts__detail__title">리액트</h3>
            <ul className="list__conts__detail__desc">
              <li>
                <a href="#">슬랙 클론코딩</a>
              </li>
              <li>
                <a href="#">리액트 블로그</a>
              </li>
              <li>
                <a href="#">API SITE</a>
              </li>
              <li>
                <a href="#">리액트 파이어 베이스</a>
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
