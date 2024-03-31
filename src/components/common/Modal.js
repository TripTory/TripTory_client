import styled from "styled-components";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { COLOR } from "../../styles/color.js";


const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 80%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  background-color: white;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-height: 70vh;
  overflow-y: auto;
`;

const BackgroundOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const CloseButton = styled.button`
  display: flex;
  margin: auto;
  background-color: ${COLOR.MAIN_EMER};
  border: none;
  border-radius: 10px;
  width: 40px;
  height: 25px;
  color: white;
  align-items: center;
  justify-content: center;
`;

const Modal = ({ content, closeModals }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <BackgroundOverlay onClick={closeModals}>
      <ModalContainer>
        {content}
        <CloseButton onClick={closeModal}>닫기</CloseButton>
      </ModalContainer>
    </BackgroundOverlay>

  );
};

Modal.propTypes = {
  content: PropTypes.node.isRequired,
  closeModals: PropTypes.func.isRequired,
};

export default Modal;
