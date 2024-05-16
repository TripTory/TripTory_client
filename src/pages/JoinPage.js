import styled from "styled-components";
import React, { useState, useEffect } from "react";
import Modal from "../components/common/Modal";
import { COLOR } from "../styles/color";

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

  const termsOfService1 =
`
트립토리(이하 "회사"라 함) 서비스 이용약관

제1장 총칙

제1조 (목적)
이 약관은 회사가 제공하는 트립토리 서비스(이하 "서비스"라 함)의 이용과 관련하여 회사와 이용자 사이의 권리와 의무, 책임사항 및 기타 필요한 사항을 규정함을 목적으로 합니다.

제2조 (정의)

"서비스"라 함은 회사가 제공하는 트립토리 애플리케이션을 통한 여행 기록 관리 및 공유 서비스를 의미합니다.
"이용자"라 함은 이 약관에 동의하고 회사가 제공하는 서비스를 이용하는 자를 말합니다.
"계정"이라 함은 이용자의 식별 및 서비스 이용을 위하여 필요한 아이디와 비밀번호를 의미합니다.
제2장 이용계약의 체결

제3조 (이용계약의 성립)

이용계약은 이용자가 앱 내 회원가입 절차를 완료함으로써 성립됩니다.
이용자는 회사가 요청하는 개인정보를 제공하고 이 약관에 동의하여야 서비스를 이용할 수 있습니다.
이용자는 제공한 정보가 변동되었을 경우 이를 즉시 수정하여야 합니다.
제3장 서비스 이용

제4조 (서비스 이용)

이용자는 본 서비스를 자유롭게 이용할 수 있으며, 회사는 이용자의 이용 신청을 승낙하는 경우 서비스를 제공합니다.
회사는 이용자의 서비스 이용에 필요한 조치를 취할 수 있으며, 이용자는 회사의 조치에 협조하여야 합니다.
이용자는 서비스를 이용함에 있어 회사의 지적재산권을 침해해서는 안 됩니다.
제4장 개인정보보호

제5조 (개인정보보호)

회사는 이용자의 개인정보 보호를 위해 최선을 다하며, 개인정보 처리에 대한 내용은 별도의 개인정보 처리방침에 따릅니다.
이용자의 개인정보 보호와 관련된 사항은 관련 법령 및 회사의 개인정보 처리방침에 따릅니다.
제5장 기타

제6조 (면책조항)

회사는 천재지변, 전쟁, 테러, 해킹 등 불가항력적인 사유로 인해 서비스를 제공할 수 없는 경우에는 책임을 지지 않습니다.
회사는 이용자가 서비스를 이용함으로써 발생하는 손해에 대하여 책임을 부담하지 않습니다.
제7조 (분쟁해결)
본 약관에 관한 분쟁은 대한민국 법령에 따라 해결되며, 해결되지 않을 경우 서울중앙지방법원을 관할 법원으로 합니다.

부칙

이 약관은 2024년 5월 16일부터 시행됩니다.
`;
  const termsOfService2 = `
  `;

  const termsOfService3 = `
  `;

  return (
    <EntireDiv>
      <JoinP>회원가입</JoinP>
      <br />

      <NameDiv>
        <NameP>이름</NameP>
        <NameInput placeholder="이름을 입력해주세요." />
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
            <CustomButton onClick={() => openModal(termsOfService1)}>
              보기 &gt;
            </CustomButton>
            <CustomButton onClick={() => openModal(termsOfService2)}>
              보기 &gt;
            </CustomButton>
            <CustomButton onClick={() => openModal(termsOfService3)}>
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
          content={<ContentDiv>{modalContent}</ContentDiv>}
          w="70%"
          h="55%"
          buttons={
            <CloseBtn onClick={closeModal}>닫기</CloseBtn>
          }
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
  padding: 1rem;
`;

const EntireAgreeDiv = styled.div`
  ${SharedContent}
  display: flex; 
  flex-direction: column;
`;

const AllLabel = styled.div`
  padding-right: 16rem;
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
  margin-bottom: 1.5rem;

`;

const BtnDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 1rem;
  width: 4rem;
  margin-left: 1rem;
`;

const CustomButton = styled.button`
  font-size: 1.3rem; 
  margin-bottom: 1.6rem;
  border: 0;
  background-color: transparent;
  width: 5rem;
  color: #CACACA;
`;

const AgreeDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1.5rem;
  margin-bottom: 6rem;
`;

const StartDiv = styled.button`
  ${SharedContent}
  display: flex;
  font-size: 2.2rem;
  font-weight: 400;
  color: #ffffff;
  background-color: ${COLOR.MAIN_EMER};
  border: none;
  border-radius: 30px;
  height: 4.7rem;
  width: 20rem;
  margin: auto;

  background-color: ${(props) => props.disabled ? "rgba(46, 171, 161, 0.3)" : "${COLOR.MAIN_EMER}"}
`;


const CloseBtn = styled.button`
  margin-top: 3rem;
  width: 5rem;
  height: 2.5rem;
  background-color: ${COLOR.MAIN_EMER_LIGHT};
  border: none;
  border-radius: 1rem;
`;

const ContentDiv = styled.div`
  white-space: pre-line;
  margin-top: 48rem;
  font-size: 1.2rem;
`;

export default JoinPage;
