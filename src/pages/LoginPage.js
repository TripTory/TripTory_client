import styled from "styled-components";
import { COLOR } from "../styles/color";
import kakaologo from "../assets/images/kakaoLogo.svg";
import googlelogo from "../assets/images/googleLogo.svg";
import naverlogo from "../assets/images/naverLogo.svg";

import React from "react";
import { useNavigate } from "react-router-dom";


const LoginPage = () => {
  const navigate = useNavigate();

  const goToGoogleOauth = () => {
    navigate("/oauth/google");
  };

  return (
    <EntireDiv>
      <IntroP>트립토리로 <br />여행을 기록해보세요!</IntroP>

      <SocialDiv>
        <SocialButton className="kakaoBtn">
          <LogoImage src={kakaologo} />카카오 로그인 버튼
        </SocialButton>

        <SocialButton className="googleBtn" onClick={goToGoogleOauth}>
          <LogoImage src={googlelogo} /> 구글 로그인 버튼
        </SocialButton>

        <SocialButton className="naverBtn">
          <LogoImage src={naverlogo} /> 네이버 로그인 버튼
        </SocialButton>
      </SocialDiv>
    </EntireDiv>
  );
};

const SharedContent = `
  display: flex;
  justify-content: center;
`;

const EntireDiv = styled.div`
`;

const IntroP = styled.p`
  ${SharedContent}
  font-size: 2.8rem;
  font-weight: 800;
  text-align: left;
  margin-top: 12rem;
  margin-left: -5rem;
`;


const LogoImage = styled.img`
  //width: 20px;
  height: 38px;
  margin-right: 9px;
`;

const SocialButton = styled.button`
  ${SharedContent}
  align-items: center;
  font-size: 17px;
  height: 50px;
  width: 90%;
  margin: auto;
  margin-bottom: 1.2rem;
  border-width: 5px;
  border: #747474;
  border-radius: 10px;
  box-shadow: 3px 6px #F6F6F6;

  &.kakaoBtn {
    background-color: #FBE184;
  }
  &.googleBtn {
    background-color: #ffffff;
  }
  &.naverBtn {
    color: white;
    background-color: #57CC5C;
  }
`;

const SocialDiv = styled.div`
  ${SharedContent}
  margin-top: 30%;
  flex-direction: column;
`;

export default LoginPage;
