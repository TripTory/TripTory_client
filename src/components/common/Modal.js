import styled from "styled-components";
import PropTypes from "prop-types";
import React from "react";

const Modal = ({ content, closeModals, buttons, w, h }) => {

  return (
    <BackgroundOverlay>
      <ModalContainer style={{width: `${w}`, height: `${h}`}}>
        {content}
        {buttons && <ButtonContainer>{buttons}</ButtonContainer>}
      </ModalContainer>
    </BackgroundOverlay>

  );
};

Modal.propTypes = {
  content: PropTypes.node.isRequired,
  closeModals: PropTypes.func.isRequired,
  buttons: PropTypes.node,
  w: PropTypes.string.isRequired,
  h: PropTypes.string.isRequired,
};


const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  background-color: white;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-height: 70vh;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export default Modal;
