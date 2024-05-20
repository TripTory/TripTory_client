import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from "prop-types";
import { COLOR } from "../../styles/color";

const ImageSlider = ({ images }) => {
  if (images === undefined) {
    return null;
  }
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <SliderStyle {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <Imgfile src={image} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </SliderStyle>
  );
};
ImageSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default ImageSlider;

const Imgfile = styled.img`
  width: 19rem;
  height: 19rem;
  margin: auto;
`;

const SliderStyle = styled(Slider)`
  width: 90%;
  margin: auto;
  padding-bottom: 6rem;

  .slick-prev,
  .slick-next {
    color: transparent;
    z-index: 1;
  }

  .slick-prev {
    left: 3rem;
    padding-bottom: 6rem;
  }

  .slick-next {
    right: 3rem;
    padding-bottom: 6rem;
  }

  .slick-prev:before,
  .slick-next:before {
    color: ${COLOR.MAIN_GREEN};
    z-index: -1;
  }
`;
