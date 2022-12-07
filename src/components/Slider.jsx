import React, { useState, useEffect } from 'react';

function Slider({ src, index }) {
  const address = [
    // 소스보기, 데모보기
    [
      'https://github.com/kim-0617/algorithm/tree/main/02',
      'https://kim0617.tistory.com/category/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98',
    ],
    [
      'https://github.com/kim-0617/codingclass/tree/main/site/site1.1',
      'https://kim-0617.github.io/codingclass/site/site1.1/index.html',
    ],
    [
      'https://github.com/kim-0617/codingclass/tree/main/site/site1.2',
      'https://kim-0617.github.io/codingclass/site/site1.2/index.html',
    ],
    [
      'https://github.com/kim-0617/codingclass/tree/main/site/site1.4',
      'https://kim-0617.github.io/codingclass/site/site1.4/index.html',
    ],
    [
      'https://github.com/kim-0617/codingclass/tree/main/site/site1-responsive',
      'https://kim-0617.github.io/codingclass/site/site1-responsive/index.html',
    ],
    [
      'https://github.com/kim-0617/codingclass/tree/main/site/site2-prev',
      'https://kim-0617.github.io/codingclass/site/site2-prev/index.html',
    ],
    [
      'https://github.com/kim-0617/codingclass/blob/main/javascript/effect/parallaxEffect07.html',
      'https://kim-0617.github.io/codingclass/javascript/effect/parallaxEffect07.html',
    ],
    [
      'https://github.com/kim-0617/codingclass/blob/main/javascript/effect/quizEffect06.html',
      'https://kim-0617.github.io/codingclass/javascript/effect/quizEffect06.html',
    ],
    [
      'https://github.com/kim-0617/codingclass/blob/main/javascript/effect/sliderEffect07.html',
      'https://kim-0617.github.io/codingclass/javascript/effect/sliderEffect07.html',
    ],
    [
      'https://github.com/kim-0617/codingclass/blob/main/javascript/effect/mouseEffect06.html',
      'https://kim-0617.github.io/codingclass/javascript/effect/mouseEffect06.html',
    ],
    [
      'https://github.com/kim-0617/codingclass/blob/main/javascript/asset/js/tetris2.js',
      'https://kim-0617.github.io/codingclass/javascript/effect/gameEffect01.html',
    ],
    [
      'https://github.com/kim-0617/codingclass/blob/main/javascript/asset/js/searchGame.js',
      'https://kim-0617.github.io/codingclass/javascript/effect/gameEffect01.html',
    ],
    [
      'https://github.com/kim-0617/codingclass/blob/main/javascript/asset/js/memory.js',
      'https://kim-0617.github.io/codingclass/javascript/effect/gameEffect01.html',
    ],
    [
      'https://github.com/kim-0617/codingclass/blob/main/javascript/asset/js/music.js',
      'https://kim-0617.github.io/codingclass/javascript/effect/gameEffect01.html',
    ],
    ['https://github.com/kim-0617/PHPClass/tree/main/php', 'http://als1702.dothome.co.kr/php/main/main.php'],
    ['https://github.com/kim-0617/PHPTeamProject/tree/main/php', 'http://kkk5993.dothome.co.kr/'],
    ['https://github.com/kim-0617/vueclass', 'https://vueclass17.web.app/'],
    ['https://github.com/kim-0617/vue_api', 'https://vueapi17-2b28a.web.app/'],
    ['https://github.com/kim-0617/react_api', 'https://cra02.netlify.app/'],
    ['https://github.com/kim-0617/react_youtube', 'https://devyoutube.netlify.app/'],
    ['https://github.com/kim-0617/react_music', 'https://musicplaying.netlify.app/'],
    ['https://github.com/kim-0617/webgameReact', 'https://reactwebgame-314c7.web.app/'],
    ['https://github.com/kim-0617/firebaselogin', 'https://mydiary-f4e5d.web.app/login'],
    ['https://github.com/kim-0617/react-blog', 'https://github.com/kim-0617/react-blog'],
    ['https://github.com/kim-0617/sleact/tree/main/alecture', 'https://github.com/kim-0617/sleact/tree/main/alecture'],
  ];

  const onClickSource = () => {
    window.open(address[index][0]);
  };

  const onClickDemo = () => {
    window.open(address[index][1]);
  };

  useEffect(() => {
    const bg = document.querySelectorAll('.slider__detail')[index];
    const btn1 = document.querySelectorAll('.slider__detail .btn1')[index];
    const btn2 = document.querySelectorAll('.slider__detail .btn2')[index];

    if (index < 4) {
      bg.style.background = '#392de44d';
      // btn1.style.background = '#392de44d';
      // btn2.style.background = '#392de44d';
    } else if (index < 6) {
      bg.style.background = '#dfdfdfb0';
      // btn1.style.background = '#dfdfdfb0';
      // btn2.style.background = '#dfdfdfb0';
    } else if (index < 10) {
      bg.style.background = '#f9d1c294';
      // btn1.style.background = '#f9d1c294';
      // btn2.style.background = '#f9d1c294';
    } else if (index < 14) {
      bg.style.background = '#eecd876b';
      // btn1.style.background = '#eecd876b';
      // btn2.style.background = '#eecd876b';
    } else if (index < 16) {
      bg.style.background = '#bacfc2ab';
      // btn1.style.background = '#bacfc2ab';
      // btn2.style.background = '#bacfc2ab';
    } else if (index < 18) {
      bg.style.background = '#f6b69da1';
      // btn1.style.background = '#f6b69da1';
      // btn2.style.background = '#f6b69da1';
    } else {
      bg.style.background = '#acc1d99e';
      // btn1.style.background = '#acc1d99e';
      // btn2.style.background = '#acc1d99e';
    }
  }, [index]);

  return (
    <>
      <div className="slider__detail">
        <h3>웹표준을 준수한 사이트입니다.</h3>
        <p>
          웹 표준 접근성에 따라 작업하였습니다. 웹 표준 접근성에 따라 작업하였습니다. 웹 표준 접근성에 따라
          작업하였습니다. 웹 표준 접근성에 따라 작업하였습니다.
        </p>
        <button className="btn1 custom-btn btn-8">
          <span onClick={onClickSource}>소스보기</span>
        </button>
        <button className="btn2 custom-btn btn-8">
          <span onClick={onClickDemo}>데모보기</span>
        </button>
      </div>
      <img src={src} alt={`${index}번째 이미지`} />
    </>
  );
}

export default Slider;
