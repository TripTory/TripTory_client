import styled from "styled-components";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const JoinPage = () => {
  const [isChecked, setIsChecked] = useState({
    all: false,
    agreement: false,
    privacy: false,
    marketing: false,
  });

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

  const navigate = useNavigate();

  const navigateToAgree = () => {
    navigate("/agreement");
  };

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
            <label>
              <CustomCheckbox
                type="checkbox"
                name="agreement"
                checked={isChecked.agreement}
                onChange={handleCheckboxChange}
              />{" "}
              이용약관 동의{" "}
            </label>
            <label>
              <CustomCheckbox
                type="checkbox"
                name="privacy"
                checked={isChecked.privacy}
                onChange={handleCheckboxChange}
              />{" "}
              개인정보 취급방침 동의{" "}
            </label>
            <label>
              <CustomCheckbox
                type="checkbox"
                name="marketing"
                checked={isChecked.marketing}
                onChange={handleCheckboxChange}
              />{" "}
              마케팅 정보 수신 동의{" "}
            </label>
          </RadioDiv>

          <BtnDiv>
            <CustomButton onClick={navigateToAgree}>보기 &gt;</CustomButton>
            <CustomButton onClick={navigateToAgree}>보기 &gt;</CustomButton>
            <CustomButton onClick={navigateToAgree}>보기 &gt;</CustomButton>
          </BtnDiv>
        </AgreeDiv>
      </EntireAgreeDiv>

      <StartDiv>
        시작하기
      </StartDiv>
    </EntireDiv>
  );
};

const SharedContent = `
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EntireDiv = styled.div`
  margin: 3rem;
`;


const JoinP = styled.p`
  ${SharedContent}
  font-size: 3rem;
  font-family: var(--inter-extrabold);
  font-weight: 700;
  margin-top: 10px;
  margin-bottom: 6rem;
`;
const NameP = styled.div`
  padding-right: 85%;

`;

const NameDiv = styled.div`
  ${SharedContent}
  display: flex; 
  flex-direction: column;

`;


const NameInput = styled.input`
  height: 40px;
  width: 90%;
  border-radius: 5px;
  border-color: #E4E4E4;
  box-shadow: 1px 1px #F6F6F6;
  margin-bottom: 30px;
`;


const EntireAgreeDiv = styled.div`
  ${SharedContent}
  display: flex; 
  flex-direction: column;
`;

const AllLabel = styled.div`
  padding-right: 150px;
`;


const RadioDiv = styled.div`
  display: flex; 
  flex-direction: column;
  margin-left: 20px;
`;

const CustomCheckbox = styled.input`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  border: 2px solid #AACCD2;
  appearance: none;
  cursor: pointer;
  transition: background 0.2s;
  margin-bottom: 6px;
  vertical-align: middle;
  
  
  
  &:checked {
    background-color: #AACCD2;
    border-color: #AACCD2;
    /* background-image: url('src/assets/images/check.svg');
    background-repeat: no-repeat;
    background-position: center; */
  }
  
`;


const BtnDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 10px;
  width: 40px;
  margin-left: 8rem;
  
`;

const CustomButton = styled.button`
  font-size: 8px; 
  margin-bottom: 10px;
  border: 0;
  background-color: transparent;
  
`;

const AgreeDiv = styled.div`
  
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  margin-bottom: 10rem;
  
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
  height: 5rem;
  width: 20rem;
  margin: auto;
`;


export default JoinPage;
