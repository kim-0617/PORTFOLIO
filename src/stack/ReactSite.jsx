import React, { useEffect } from 'react';

function ReactSite() {
  useEffect(() => {
    const target = document.querySelectorAll('.menu__conts > div');
    target.forEach((t, index) => {
      t.style.backgroundImage = `url('image/icon/7-${index + 1}.png')`;
    });
  }, []);

  return (
    <div className="menu__conts">
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
    </div>
  );
}

export default ReactSite;
