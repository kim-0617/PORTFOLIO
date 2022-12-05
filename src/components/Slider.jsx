import React from 'react';

function Slider({ src, index }) {
  return (
    <>
      <div className="slider__detail">
        <button className="custom-btn btn-8">
          <span>소스보기</span>
        </button>
        <button className="custom-btn btn-8">
          <span>데모보기</span>
        </button>
      </div>
      <img src={src} alt={`${index}번째 이미지`} />
    </>
  );
}

export default Slider;
