import React from 'react';

function Slider({ src, index }) {
  return (
    <>
      <div className="slider__detail">
        <button class="custom-btn btn-12">
          <span>Click!</span>
          <span>소스보기</span>
        </button>
        <button class="custom-btn btn-12">
          <span>Click!</span>
          <span>데모보기</span>
        </button>
      </div>
      <img src={src} alt={`${index}번째 이미지`} />
    </>
  );
}

export default Slider;
