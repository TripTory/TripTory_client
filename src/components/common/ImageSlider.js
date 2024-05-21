import React, { useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from "prop-types";
import { COLOR } from "../../styles/color";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import xicon from "../../assets/icons/x-icon.svg";

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

  const [open, setOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(null);

  const handleClose = () => {
    setOpen(false);
  };

  const handleImageClick = (index) => {
    setModalImageIndex(index);
    setOpen(true);
  };

  return (
    <div>
      <SliderStyle {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <Imgfile src={image} alt={`Image ${index + 1}`} onClick={() => handleImageClick(index)} />
          </div>
        ))}
      </SliderStyle>

      <Modal open={open} onClose={handleClose}>
        <ModalContent>
          {modalImageIndex !== null && (
            <img
              src={images[modalImageIndex]}
              alt={`Image ${modalImageIndex + 1}`}
              style={{ padding: "1rem", width: "100%" }}
            />
          )}
          <CircleDiv>
            <img src={xicon} style={{ height: "3rem", marginTop: "0.1rem" }} onClick={handleClose} />
          </CircleDiv>
        </ModalContent>
      </Modal>
    </div>
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
  object-fit: cover;
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

const ModalContent = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column
`;

const CircleDiv = styled.div`
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content : center;
  background-color : rgb(255, 255, 255); opacity : 0.5;
  border-radius: 2rem;
`;
