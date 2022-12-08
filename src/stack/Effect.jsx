import React, { forwardRef, useEffect, useContext } from 'react';
import { mapping, reverseMapping } from '../components/CodingWork';
import { ChangeContext } from '../context/ChangeContext';

function Effect(prop, ref) {
  useEffect(() => {
    const target = document.querySelectorAll('.menu__conts > div');
    target.forEach((t, index) => {
      t.style.backgroundImage = `url('image/icon/3-${index + 1}.png')`;
      t.style.borderColor = '#B89186';
      t.style.backgroundColor = '#F9D1C2';
    });
  }, []);

  const onClickSite = (e) => {
    if (e.target.className !== 'menu__conts') {
      document.querySelectorAll('.bdrs').forEach((r) => {
        r.classList.remove('bdrs');
      });

      e.target.classList.add('bdrs');
      const name = e.target.className.replace('bdrs', '');
      ref.current.swiper.slideTo(mapping[name]);
    }
  };

  const { index } = useContext(ChangeContext);

  useEffect(() => {
    document.querySelectorAll('.bdrs').forEach((r) => {
      r.classList.remove('bdrs');
    });

    document.querySelector(`.${reverseMapping[index]}`)?.classList.add('bdrs');
  }, [index]);

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
