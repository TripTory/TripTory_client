import styled from "styled-components";
import kakaologo from "../assets/images/kakaoLogo.svg";
import googlelogo from "../assets/images/googleLogo.svg";
import naverlogo from "../assets/images/naverLogo.svg";

import React from "react";


const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const LoginPage = () => {

  const goToGoogleOauth = () => {
    window.location.href = `${SERVER_URL}/oauth/google`;
  };

  const goToNaverOauth = () => {
    fetch(`${SERVER_URL}/oauth/naver`, {
      method: "GET",
      credentials: "include",
      mode: "no-cors"
    })
    .then((response) => {
      console.log(response);
      if (response) {
        console.log("네이버 로그인 성공!");
        window.location.href = `${SERVER_URL}/oauth/naver`;
      } else {
        console.log("네이버 로그인 실패");
      }
    })
    .catch((error) => console.error("네이버 로그인 에러:", error));
  };

  const goToKakaoOauth = () => {
    window.location.href = `${SERVER_URL}/oauth/kakao`;
  };

  return (
    <EntireDiv>
      <IntroP>트립토리로 <br />여행을 기록해보세요!</IntroP>

      <SocialDiv>
        <SocialButton className="kakaoBtn" onClick={goToKakaoOauth}>
          <LogoImage src={kakaologo} />카카오 로그인 버튼
        </SocialButton>

        <SocialButton className="googleBtn" onClick={goToGoogleOauth}>
          <LogoImage src={googlelogo} /> 구글 로그인 버튼
        </SocialButton>

        <SocialButton className="naverBtn" onClick={goToNaverOauth}>
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
