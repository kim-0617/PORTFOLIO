import React, { useEffect } from 'react';

function standard() {
  useEffect(() => {
    const target = document.querySelectorAll('.menu__conts > div');
    target.forEach((t, index) => {
      t.style.backgroundImage = `url('image/icon/1-${index + 1}.png')`;
    });
  }, []);

  return (
    <div className="menu__conts">
      <div className="oneOne">
        <span className="ir">알고리즘</span>
      </div>
      <div className="oneTwo">
        <span className="ir">웹표준코딩 1-1</span>
      </div>
      <div className="oneThree">
        <span className="ir">웹표준코딩 1-2</span>
      </div>
      <div className="oneFour">
        <span className="ir">웹표준코딩 1-3</span>
      </div>
    </div>
  );
}

export default standard;
