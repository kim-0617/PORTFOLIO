import React, { forwardRef, useEffect } from 'react';
import { mapping } from '../components/CodingWork';

function Effect(prop, ref) {
  useEffect(() => {
    const target = document.querySelectorAll('.menu__conts > div');
    target.forEach((t, index) => {
      t.style.backgroundImage = `url('image/icon/3-${index + 1}.png')`;
    });
  }, []);

  const onClickSite = (e) => {
    if (e.target.className !== 'menu__conts') {
      ref.current.swiper.slideTo(mapping[e.target.className]);
    }
  }

  return (
    <div className="menu__conts" onClick={onClickSite}>
      <div className="threeOne">
        <span className="ir">이펙트 3-1</span>
      </div>
      <div className="threeTwo">
        <span className="ir">이펙트 3-2</span>
      </div>
      <div className="threeThree">
        <span className="ir">이펙트 3-3</span>
      </div>
      <div className="threeFour">
        <span className="ir">이펙트 3-4</span>
      </div>
    </div>
  );
}

export default forwardRef(Effect);
