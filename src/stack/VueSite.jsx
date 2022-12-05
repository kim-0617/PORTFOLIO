import React, { forwardRef, useEffect } from 'react';
import { mapping } from '../components/CodingWork';

function VueSite(prop, ref) {
  useEffect(() => {
    const target = document.querySelectorAll('.menu__conts > div');
    target.forEach((t, index) => {
      t.style.backgroundImage = `url('image/icon/6-${index + 1}.png')`;
      t.style.borderColor = '#C99B87';
      t.style.backgroundColor = '#FABDA3';
    });
  }, []);

  const onClickSite = (e) => {
    if (e.target.className !== 'menu__conts') {
      ref.current.swiper.slideTo(mapping[e.target.className]);
    }
  };

  return (
    <div className="menu__conts" onClick={onClickSite}>
      <div className="sixOne">
        <span className="ir">VUE 6-1</span>
      </div>
      <div className="sixTwo">
        <span className="ir">VUE 6-2</span>
      </div>
    </div>
  );
}

export default forwardRef(VueSite);
