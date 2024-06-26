import styled from "styled-components";
import { COLOR } from "../styles/color";
import { useParams } from "react-router-dom";
import goback from "../assets/icons/goback.svg";
import xicon from "../assets/icons/x-icon.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Menubar from "../components/common/Menubar.js";

export default function TagPage() {
  const navigate = useNavigate();
  const { tagName } = useParams();

  const [open, setOpen] = React.useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(null);

  const goToHome = () => {
    navigate("/home");
  };

  const handleImageClick = (index) => {
    setModalImageIndex(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const [tagImages, setTagImages] = useState([]);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/tag/${tagName}`, { withCredentials: true })
      .then((res) => {
        const data = res.data.images;
        setTagImages(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [tagName]);

  return (
    <EntireDiv>
      <UpDiv>
        <GoBack>
          <img src={goback} style={{ height: "2.7rem" }} onClick={goToHome} />
        </GoBack>
        <Menubar />
      </UpDiv>
      <div>
        <Tagbox>
          <TagP># {tagName}</TagP>
        </Tagbox>
        <ImageContainer>
          {tagImages.map((imagePath, index) => (
            <img
              key={index}
              src={imagePath}
              alt={`${tagName}`}
              onClick={() => handleImageClick(index)}
              style={{ width: "30%" }}
            />
          ))}
        </ImageContainer>
      </div>
      <Modal open={open} onClose={handleClose}>
        <ModalContent>
          {modalImageIndex !== null && (
            <img
              src={tagImages[modalImageIndex]}
              alt={`${tagName}`}
              style={{ padding: "1rem", width: "100%" }}
            />
          )}
          <CircleDiv>
            <img src={xicon} style={{ height: "3rem", marginTop: "0.1rem" }} onClick={handleClose} />
          </CircleDiv>
        </ModalContent>
      </Modal>
    </EntireDiv>
  );
}

const EntireDiv = styled.div`
  margin-top: 2%;
  height: 100%;
`;

const UpDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const GoBack = styled.div`
  margin-top: 1rem;
  margin-bottom: 3rem;
  margin-left: 1rem;
`;

const Tagbox = styled.div`
  //background-color : ${COLOR.MAIN_SKY}; opacity : 0.6;
  display: inline-block;
  margin-bottom: 3rem;
  margin-left: 1rem;
  border-radius: 1.6rem;
  padding: 0.8rem;
  padding-right: 1rem;
  border: 1px solid #d9d9d9;
`;

const TagP = styled.p`
  font-size: 1.5rem;
  font-family: var(--pretendard-medium);
`;

const ModalContent = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column
`;

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;  
  overflow: auto;
  max-height: 84vh;

  img {
    flex: 0 0 calc(33.333% - 0.4rem);
    margin: 0.2rem;
    cursor: pointer;
    object-fit: cover;
    aspect-ratio: 1 / 1; // 종횡비 1:1
    transition: width 0.3s ease-in-out;
  }
`;
const CircleDiv = styled.div`
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content : center;
  //background-color : ${COLOR.MAIN_EMER}; opacity : 0.5;
  background-color : rgb(255, 255, 255); opacity : 0.5;
  border-radius: 2rem;

`;
