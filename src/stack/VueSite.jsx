import React, { forwardRef, useEffect, useContext } from 'react';
import { mapping, reverseMapping } from '../components/CodingWork';
import { ChangeContext } from '../context/ChangeContext';

function VueSite(prop, ref) {
  useEffect(() => {
    const target = document.querySelectorAll('.menu__conts > div');
    target.forEach((t, index) => {
      t.style.backgroundImage = `url('image/icon/6-${index + 1}.png')`;
      t.style.borderColor = '#C99B87';
      t.style.backgroundColor = '#FABDA3';
    });
  }, []);

  const { index } = useContext(ChangeContext);

  useEffect(() => {
    document.querySelectorAll('.bdrs').forEach((r) => {
      r.classList.remove('bdrs');
    });

    document.querySelector(`.${reverseMapping[index]}`)?.classList.add('bdrs');
  }, [index]);

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
