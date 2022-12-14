import React, { forwardRef, useEffect, useContext } from 'react';
import { mapping, reverseMapping } from '../components/CodingWork';
import { ChangeContext } from '../context/ChangeContext';

function Game(prop, ref) {
  useEffect(() => {
    const target = document.querySelectorAll('.menu__conts > div');
    target.forEach((t, index) => {
      t.style.backgroundImage = `url('image/icon/4-${index + 1}.png')`;
      t.style.borderColor = '#C2A66A';
      t.style.backgroundColor = '#EECE87';
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
      <div className="fourOne">
        <span className="ir">게임 4-1</span>
      </div>
      <div className="fourTwo">
        <span className="ir">게임 4-2</span>
      </div>
      <div className="fourThree">
        <span className="ir">게임 4-3</span>
      </div>
      <div className="fourFour">
        <span className="ir">게임 4-4</span>
      </div>
    </div>
  );
}

export default forwardRef(Game);
