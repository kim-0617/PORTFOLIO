import React from 'react';

function CodingWork() {
  return (
    <article id="CodingWork">
      <h2>Work coding</h2>
      <p>작업물을 목록형으로 보여드립니다.</p>
      <div className="CodingWork__inner">
        <img src="image/mock/1-1.png" alt="mywork" />
        <div className="menu">
          <ul className="menu__list">
            <li>
              <a href="#">웹표준 코딩</a>
            </li>
            <li>
              <a href="#">반응형 사이트</a>
            </li>
            <li>
              <a href="#">이펙트</a>
            </li>
            <li>
              <a href="#">게임</a>
            </li>
            <li>
              <a href="#">PHP</a>
            </li>
            <li>
              <a href="#">뷰 사이트</a>
            </li>
            <li>
              <a href="#">리액트 사이트</a>
            </li>
          </ul>
          <div className="menu__conts"></div>
        </div>
      </div>
    </article>
  );
}

export default CodingWork;
