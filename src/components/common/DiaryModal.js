import styled from "styled-components";
import PropTypes from "prop-types";
import React from "react";

const DiaryModal = ({ content, buttons }) => {
  return (
    <ModalContainer>
      {content && <ContentContainer>{content}</ContentContainer>}
      {buttons && <ButtonContainer>{buttons}</ButtonContainer>}
    </ModalContainer>
  );
};

DiaryModal.propTypes = {
  content: PropTypes.node.isRequired,
  closeModals: PropTypes.func.isRequired,
  buttons: PropTypes.node,
};

const ModalContainer = styled.div`
  width: 100%;
  height: 53%;
  position: fixed;
  bottom: 0;
  z-index: 100;
  background-color: white;
  padding: 10px;
  border-radius: 8px 8px 0px 0px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-height: 70vh;
  overflow-y: auto;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 85%;
`;

const ButtonContainer = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: center;
`;

export default DiaryModal;
