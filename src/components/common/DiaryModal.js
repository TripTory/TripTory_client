import styled from "styled-components";
import PropTypes from "prop-types";
import React from "react";

const Modal = ({ content, closeModals, buttons}) => {

  return (
    <BackgroundOverlay>
      <ModalContainer>
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
};


const ModalContainer = styled.div`
  width: 100%;
  height: 45%;
  position: fixed;
  bottom: 0;
  z-index: 100;
  background-color: white;
  padding: 10px;
  border-radius: 8px 8px 0px 0px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-height: 70vh;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  align-items: end;
  padding-bottom: 6rem;
`;

const BackgroundOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 99;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export default Modal;
