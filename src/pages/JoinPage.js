import styled from "styled-components";
import React, { useState, useEffect } from "react";
import Modal from "../components/common/Modal";

const JoinPage = () => {
  const [isChecked, setIsChecked] = useState({
    all: false,
    agreement: false,
    privacy: false,
    marketing: false,
  });
  const [isRequiredChecked, setIsRequiredChecked] = useState(false); // New state to track if both required checkboxes are checked

  useEffect(() => {
    setIsRequiredChecked(isChecked.agreement && isChecked.privacy);
  }, [isChecked]);

  const [modalContent, setModalContent] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;

    if (name === "all") {
      setIsChecked({
        all: checked,
        agreement: checked,
        privacy: checked,
        marketing: checked,
      });
    } else {
      setIsChecked({
        ...isChecked,
        [name]: checked,
        all: false,
      });
    }
  };

  const openModal = (content) => {
    setModalContent(content);
    toggleModal();
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const termsOfService = `

   `;

  return (
    <EntireDiv>
      <JoinP>회원가입</JoinP>
      <br />

      <NameDiv>
        <NameP>이름</NameP>
        <NameInput placeholder="  이름을 입력해주세요." />
      </NameDiv>

      <EntireAgreeDiv>
        <AllLabel>
          <CustomCheckbox
            type="checkbox"
            name="all"
            checked={isChecked.all}
            onChange={handleCheckboxChange}
          />{" "}
          모두 동의합니다.
        </AllLabel>

        <AgreeDiv>
          <RadioDiv>
            <ThreeLabel>
              <CustomCheckbox
                type="checkbox"
                name="agreement"
                checked={isChecked.agreement}
                onChange={handleCheckboxChange}
              />{" "}
              이용약관 동의 (필수){" "}
            </ThreeLabel>
            <ThreeLabel>
              <CustomCheckbox
                type="checkbox"
                name="privacy"
                checked={isChecked.privacy}
                onChange={handleCheckboxChange}
              />{" "}
              개인정보 취급방침 동의 (필수){" "}
            </ThreeLabel>
            <ThreeLabel>
              <CustomCheckbox
                type="checkbox"
                name="marketing"
                checked={isChecked.marketing}
                onChange={handleCheckboxChange}
              />{" "}
              마케팅 정보 수신 동의 (선택){" "}
            </ThreeLabel>
          </RadioDiv>

          <BtnDiv>
            <CustomButton onClick={() => openModal(termsOfService)}>
              보기 &gt;
            </CustomButton>
            <CustomButton onClick={() => openModal("두 번째 버튼 내용")}>
              보기 &gt;
            </CustomButton>
            <CustomButton onClick={() => openModal("세 번째 버튼 내용")}>
              보기 &gt;
            </CustomButton>
          </BtnDiv>
        </AgreeDiv>
      </EntireAgreeDiv>

      <StartDiv disabled={!isRequiredChecked}>
        시작하기
      </StartDiv>

      {/* 모달 관련 코드 */}
      {isModalOpen && (
        <Modal
          content={modalContent}
          closeModals={closeModal}
        />
      )}
    </EntireDiv>
  );
};

const SharedContent = `
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EntireDiv = styled.div`
  margin-top: 10rem;
  margin-left: 3rem;
  margin-right: 3rem;
`;

const JoinP = styled.p`
  ${SharedContent}
  font-size: 3rem;
  font-weight: 700;
  margin-top: 10px;
  margin-bottom: 6rem;
`;

const NameP = styled.div`
  padding-right: 85%;
  font-size: 1.2rem;
`;

const NameDiv = styled.div`
  ${SharedContent}
  display: flex; 
  flex-direction: column;
`;

const NameInput = styled.input`
  height: 4.5rem;
  width: 94%;
  border-radius: 5px;
  border: 0.1rem solid #F6F6F6;
  box-shadow: 0.1rem 0.1rem #F6F6F6;
  margin-bottom: 3rem;
  font-size: 1.5rem;
`;

const EntireAgreeDiv = styled.div`
  ${SharedContent}
  display: flex; 
  flex-direction: column;
`;

const AllLabel = styled.div`
  padding-right: 19rem;
  font-size: 1.4rem;
`;

const RadioDiv = styled.div`
  display: flex; 
  flex-direction: column;
  margin-left: 0.8rem;
  font-size: 1.3rem;
`;

const CustomCheckbox = styled.input`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  border: 2px solid #AACCD2;
  appearance: none;
  cursor: pointer;
  transition: background 0.2s;
  margin-bottom: 0.6rem;
  vertical-align: middle;
  
  &:checked {
    background-color: #AACCD2;
    border-color: #AACCD2;
    /* background-image: url('src/assets/images/check.svg');
    background-repeat: no-repeat;
    background-position: center; */
  }
`;

const ThreeLabel = styled.div`
  font-size: 1.4rem;
  margin-bottom: 1rem;

`;

const BtnDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 1rem;
  width: 4rem;
  margin-left: 4rem;
`;

const CustomButton = styled.button`
  font-size: 1.3rem; 
  margin-bottom: 1.1rem;
  border: 0;
  background-color: transparent;
  width: 5rem;
  color: #CACACA;
`;

const AgreeDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1.2rem;
  margin-bottom: 6rem;
`;

const StartDiv = styled.button`
  ${SharedContent}
  display: flex;
  font-size: 2.2rem;
  font-weight: 400;
  color: #ffffff;
  background-color: #2EABA1;
  border: none;
  border-radius: 30px;
  height: 4.7rem;
  width: 20rem;
  margin: auto;

  background-color: ${(props) => props.disabled ? "rgba(46, 171, 161, 0.3)" : "#2EABA1"}
`;

const CloseButton = styled.button`
  display: flex;
  margin: auto;
  background-color: #2EABA1;
  border: none;
  border-radius: 10px;
  width: 40px;
  height: 25px;
  color: white;
  align-items: center;
  justify-content: center;
`;

export default JoinPage;
