import React, { useEffect } from 'react';

function VueSite() {
  useEffect(() => {
    const target = document.querySelectorAll('.menu__conts > div');
    target.forEach((t, index) => {
      t.style.backgroundImage = `url('image/icon/6-${index + 1}.png')`;
    });
  }, []);

  return (
    <div className="menu__conts">
      <div className="sixOne">
        <span className="ir">VUE 6-1</span>
      </div>
      <div className="sixTwo">
        <span className="ir">VUE 6-2</span>
      </div>
    </div>
  );
}

export default VueSite;
