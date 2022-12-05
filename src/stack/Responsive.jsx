import React, { forwardRef, useEffect } from 'react';
import { mapping } from '../components/CodingWork';

function Responsive(prop, ref) {
  useEffect(() => {
    const target = document.querySelectorAll('.menu__conts > div');
    target.forEach((t, index) => {
      t.style.backgroundImage = `url('image/icon/2-${index + 1}.png')`;
      t.style.borderColor = '#A2A2A2';
      t.style.backgroundColor = '#DEDEDE';
    });
  }, []);

  const onClickSite = (e) => {
    if (e.target.className !== 'menu__conts') {
      ref.current.swiper.slideTo(mapping[e.target.className]);
    }
  };

  return (
    <div className="menu__conts" onClick={onClickSite}>
      <div className="twoOne">
        <span className="ir">반응형 2-1</span>
      </div>
      <div className="twoTwo">
        <span className="ir">반응형 2-2</span>
      </div>
    </div>
  );
}

export default forwardRef(Responsive);
