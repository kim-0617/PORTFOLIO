import React, { useEffect } from 'react';

function Game() {
  useEffect(() => {
    const target = document.querySelectorAll('.menu__conts > div');
    target.forEach((t, index) => {
      t.style.backgroundImage = `url('image/icon/4-${index + 1}.png')`;
    });
  }, []);

  return (
    <div className="menu__conts">
      <div className="fourone">
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

export default Game;
