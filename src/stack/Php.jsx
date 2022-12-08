import React, { forwardRef, useEffect, useContext } from 'react';
import { mapping, reverseMapping } from '../components/CodingWork';
import { ChangeContext } from '../context/ChangeContext';

function Php(prop, ref) {
  useEffect(() => {
    const target = document.querySelectorAll('.menu__conts > div');
    target.forEach((t, index) => {
      t.style.backgroundImage = `url('image/icon/5-${index + 1}.png')`;
      t.style.borderColor = '#8DAA98';
      t.style.backgroundColor = '#B9CFC1';
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
