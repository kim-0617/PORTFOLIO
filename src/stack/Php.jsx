import React, { useEffect } from 'react';

function Php() {
  useEffect(() => {
    const target = document.querySelectorAll('.menu__conts > div');
    target.forEach((t, index) => {
      t.style.backgroundImage = `url('image/icon/5-${index + 1}.png')`;
    });
  }, []);

  return (
    <div className="menu__conts">
      <div className="fiveOne">
        <span className="ir">PHP 5-1</span>
      </div>
      <div className="fiveTwo">
        <span className="ir">PHP 5-2</span>
      </div>
    </div>
  );
}

export default Php;
