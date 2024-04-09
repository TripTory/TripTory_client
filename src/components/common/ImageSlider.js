import React, { useRef, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ImageSlider = ({ images }) => {
  const [startIndex, setStartIndex] = useState(0);
  const sliderRef = useRef(null);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setStartX(event.pageX - sliderRef.current.offsetLeft);
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;
    event.preventDefault();
    const x = event.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 3; // Adjust speed of dragging
    sliderRef.current.scrollLeft = startIndex - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setStartIndex(sliderRef.current.scrollLeft);
  };

  return (
    <ImgSlider
      ref={sliderRef}
      className="image-slider"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {images.map((image, index) => (
        <Img key={index} src={image} alt={`Image ${index + 1}`} />
      ))}
    </ImgSlider>
  );
};

ImageSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired, // images 속성의 타입을 배열로 지정
};
export default ImageSlider;

const ImgSlider = styled.div`
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  cursor: grab;
`;

const Img = styled.img`
  scroll-snap-align: start;
  flex: 0 0 auto;
  width: 20rem;
  height: 20rem;
`;
