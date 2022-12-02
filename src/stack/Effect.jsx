import React, { useEffect } from 'react';

function Effect() {
  useEffect(() => {
    const target = document.querySelectorAll('.menu__conts > div');
    target.forEach((t, index) => {
      t.style.backgroundImage = `url('image/icon/3-${index + 1}.png')`;
    });
  }, []);

  return (
    <div className="menu__conts">
      <div className="threeone">
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

export default Effect;
