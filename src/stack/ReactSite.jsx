import React, { forwardRef, useEffect, useContext } from 'react';
import { mapping, reverseMapping } from '../components/CodingWork';
import { ChangeContext } from '../context/ChangeContext';

function ReactSite(prop, ref) {
  useEffect(() => {
    const target = document.querySelectorAll('.menu__conts > div');
    target.forEach((t, index) => {
      t.style.backgroundImage = `url('image/icon/7-${index + 1}.png')`;
      t.style.borderColor = '#879AAA';
      t.style.backgroundColor = '#B1C6DF';
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
      <div className="sevenOne">
        <span className="ir">React 7-1</span>
      </div>
      <div className="sevenTwo">
        <span className="ir">React 7-2</span>
      </div>
      <div className="sevenThree">
        <span className="ir">React 7-3</span>
      </div>
      <div className="sevenFour">
        <span className="ir">React 7-4</span>
      </div>
      <div className="sevenFive">
        <span className="ir">React 7-5</span>
      </div>
      <div className="sevenSix">
        <span className="ir">React 7-6</span>
      </div>
      <div className="sevenSeven">
        <span className="ir">React 7-7</span>
      </div>
      <div className="sevenEight">
        <span className="ir">React 7-8</span>
      </div>
      <div className="sevenNine">
        <span className="ir">React 7-9</span>
      </div>
    </div>
  );
}

export default forwardRef(ReactSite);
