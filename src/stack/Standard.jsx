import React, { forwardRef, useEffect } from 'react';
import { mapping } from '../components/CodingWork';

function standard(prop, ref) {
  useEffect(() => {
    const target = document.querySelectorAll('.menu__conts > div');
    target.forEach((t, index) => {
      t.style.backgroundImage = `url('image/icon/1-${index + 1}.png')`;
      t.style.borderColor = '#737199';
      t.style.backgroundColor = '#A7A3D0';
    });
  }, []);

  const onClickSite = (e) => {
    if (e.target.className !== 'menu__conts') {
      ref.current.swiper.slideTo(mapping[e.target.className]);
    }
  };

  return (
    <div className="menu__conts" onClick={onClickSite}>
      <div className="oneOne">
        <span className="ir">알고리즘</span>
      </div>
      <div className="oneTwo">
        <span className="ir">웹표준코딩 1-1</span>
      </div>
      <div className="oneThree">
        <span className="ir">웹표준코딩 1-2</span>
      </div>
      <div className="oneFour">
        <span className="ir">웹표준코딩 1-3</span>
      </div>
    </div>
  );
}

export default forwardRef(standard);
