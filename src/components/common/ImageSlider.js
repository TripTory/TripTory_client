import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from "prop-types";

const ImageSlider = ({ images }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <Img src={image} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </Slider>
  );
};
ImageSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired
};
export default ImageSlider;

const Img = styled.img`
  width: 20rem;
  height: 20rem;
  margin: auto;
`;
