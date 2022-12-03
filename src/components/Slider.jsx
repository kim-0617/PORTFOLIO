import React from 'react'

function Slider({ src, index }) {
    return (
        <img src={src} alt={`${index}번째 이미지`} />
    )
}

export default Slider