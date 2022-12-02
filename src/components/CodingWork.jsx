import React, { useState } from 'react';
import { Selector } from './';

function CodingWork() {
  const [stack, setStack] = useState('Standard');

  const onClickMenu = (e) => {
    if (e.target.tagName === 'A') {
      e.preventDefault();
      document.querySelectorAll('.menu__list li').forEach((li) => {
        li.classList.remove('active');
      });
      e.target.parentElement.classList.add('active');
      switch (e.target.innerText) {
        case '웹표준 코딩':
          setStack('Standard');
          break;
        case '반응형 사이트':
          setStack('Responsive');
          break;
        case '이펙트':
          setStack('Effect');
          break;
        case '게임':
          setStack('Game');
          break;
        case 'PHP':
          setStack('Php');
          break;
        case '뷰 사이트':
          setStack('VueSite');
          break;
        case '리액트 사이트':
          setStack('ReactSite');
          break;
        default:
          setStack('Standard');
          break;
      }
    }
  };

  return (
    <article id="CodingWork">
      <h2>Work coding</h2>
      <p>작업물을 슬라이드 형식으로 보여드립니다.</p>
      <div className="CodingWork__inner">
        <img src="image/mock/1-1.png" alt="mywork" />
        <div className="menu">
          <ul className="menu__list" onClick={onClickMenu}>
            <li className="active">
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
          <Selector value={stack} />
        </div>
      </div>
    </article>
  );
}

export default CodingWork;
