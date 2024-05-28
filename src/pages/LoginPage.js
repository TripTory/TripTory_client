import styled from "styled-components";
import kakaologo from "../assets/images/kakaoLogo.svg";
import googlelogo from "../assets/images/googleLogo.svg";
import naverlogo from "../assets/images/naverLogo.svg";
import React from "react";
import axios from "axios";

const LoginPage = () => {
  const SERVER_URL = process.env.REACT_APP_SERVER_URL;

  const goToGoogleOauth = async () => {
    try {
      const response = await axios.get(`${SERVER_URL}/oauth/google`, {
        withCredentials: true,
      });
      const { authorizationUrl } = response.data;
      window.location.href = authorizationUrl;
    } catch (error) {
      console.error("구글 로그인 에러:", error);
    }
  };

  const goToNaverOauth = async () => {
    try {
      const response = await axios.get(`${SERVER_URL}/oauth/naver`, {
        withCredentials: true,
      });
      const { authorizationUrl } = response.data;
      window.location.href = authorizationUrl;
    } catch (error) {
      console.error("네이버 로그인 에러:", error);
    }
  };

  const goToKakaoOauth = async () => {
    try {
      const response = await axios.get(`${SERVER_URL}/oauth/kakao`, {
        withCredentials: true,
      });
      const { authorizationUrl } = response.data;
      window.location.href = authorizationUrl;
    } catch (error) {
      console.error("카카오 로그인 에러:", error);
    }
  };

  return (
    <EntireDiv>
      <IntroDiv>
        <IntroP>
          트립토리로 <br />
          여행을 기록해보세요!
        </IntroP>
      </IntroDiv>
      <SocialDiv>
        <BtnDiv>
          <SocialButton className="kakaoBtn" onClick={goToKakaoOauth}>
            <LogoImage src={kakaologo} />
            카카오 로그인
          </SocialButton>

          <SocialButton className="googleBtn" onClick={goToGoogleOauth}>
            <LogoImage src={googlelogo} /> 구글 로그인
          </SocialButton>

          <SocialButton className="naverBtn" onClick={goToNaverOauth}>
            <LogoImage src={naverlogo} /> 네이버 로그인
          </SocialButton>
        </BtnDiv>
      </SocialDiv>
    </EntireDiv>
  );
};

const SharedContent = `
  display: flex;
  justify-content: center;
`;

const EntireDiv = styled.div`
  width: 100%;
  height: 100%;
`;

const IntroDiv = styled.div`
  width: 100%;
  height: 35%;
  border: 1px solid white;
`;
const IntroP = styled.p`
  ${SharedContent}
  font-size: 2.8rem;
  font-weight: 800;
  text-align: left;
  margin-top: 12rem;
  margin-left: -5rem;
  font-family: var(--pretendard-bold);
`;

const LogoImage = styled.img`
  height: 38px;
  margin-right: 9px;
`;
const SocialDiv = styled.div`
  display: flex;
  justify-content: baseline;
  flex-direction: column;
  width: 100%;
  height: 65%;
`;

const BtnDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 40%;
`;

const SocialButton = styled.button`
  ${SharedContent}
  align-items: center;
  font-size: 17px;
  font-family: var(--pretendard-medium);
  height: 50px;
  width: 90%;
  margin: auto;
  margin-bottom: 1.2rem;
  border-width: 5px;
  border: #747474;
  border-radius: 10px;
  box-shadow: 3px 6px #f6f6f6;

  &.kakaoBtn {
    background-color: #fbe184;
  }
  &.googleBtn {
    background-color: #ffffff;
  }
  &.naverBtn {
    color: white;
    background-color: #57cc5c;
  }
`;

export default LoginPage;
