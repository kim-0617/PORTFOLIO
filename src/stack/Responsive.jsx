import React, { forwardRef, useEffect, useContext } from 'react';
import { mapping, reverseMapping } from '../components/CodingWork';
import { ChangeContext } from '../context/ChangeContext';

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
      <div className="twoOne">
        <span className="ir">반응형 2-1</span>
      </div>
      <div className="twoTwo">
        <span className="ir">반응형 2-2</span>
      </div>
      <div className="twoThree">
        <span className="ir">반응형 2-2</span>
      </div>
    </div>
  );
}

export default forwardRef(Responsive);
