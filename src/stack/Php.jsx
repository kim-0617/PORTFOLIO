import React, { forwardRef, useEffect } from 'react';
import { mapping } from '../components/CodingWork';

function Php(prop, ref) {
  useEffect(() => {
    const target = document.querySelectorAll('.menu__conts > div');
    target.forEach((t, index) => {
      t.style.backgroundImage = `url('image/icon/5-${index + 1}.png')`;
    });
  }, []);

  const onClickSite = (e) => {
    if (e.target.className !== 'menu__conts') {
      ref.current.swiper.slideTo(mapping[e.target.className]);
    }
  }

  return (
    <div className="menu__conts" onClick={onClickSite}>
      <div className="fiveOne">
        <span className="ir">PHP 5-1</span>
      </div>
      <div className="fiveTwo">
        <span className="ir">PHP 5-2</span>
      </div>
    </div>
  );
}

export default forwardRef(Php);
