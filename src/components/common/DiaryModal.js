import styled from "styled-components";
import PropTypes from "prop-types";
import React from "react";

const DiaryModal = ({ content, closeModals, buttons }) => {
  const handleClickOutside = (event) => {
    if (event.target === event.currentTarget) {
      // 배경 클릭 시에 모달 닫기
      closeModals();
    }
  };
  return (
    <BackgroundOverlay onClick={handleClickOutside}>
      <ModalContainer>
        {content && <ContentContainer>{content}</ContentContainer>}
        {buttons && <ButtonContainer>{buttons}</ButtonContainer>}
      </ModalContainer>
    </BackgroundOverlay>
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
  padding-bottom: 6rem;
`;

const BackgroundOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 99;
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
