import React, { useEffect } from 'react';

function Responsive() {
  useEffect(() => {
    const target = document.querySelectorAll('.menu__conts > div');
    target.forEach((t, index) => {
      t.style.backgroundImage = `url('image/icon/2-${index + 1}.png')`;
    });
  }, []);

  return (
    <div className="menu__conts">
      <div className="twoOne">
        <span className="ir">반응형 2-1</span>
      </div>
      <div className="twoTwo">
        <span className="ir">반응형 2-2</span>
      </div>
    </div>
  );
}

export default Responsive;
