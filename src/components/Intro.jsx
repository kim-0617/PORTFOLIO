import React from 'react';

function Intro() {
  return (
    <section id="intro">
      <div className="intro__inner">
        <h2>
          PORT <br />
          FOLIO
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
