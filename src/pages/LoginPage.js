import styled from "styled-components";
import kakaologo from "../assets/images/kakaoLogo.svg";
import googlelogo from "../assets/images/googleLogo.svg";
import naverlogo from "../assets/images/naverLogo.svg";
import React from "react";
import axios from "axios";


const LoginPage = () => {
  const SERVER_URL = process.env.REACT_APP_SERVER_URL;
  // 요청을 보낼 함수
  /*
  const sendRequest = async () => {
    try {
      console.log(1);
      // Fetch API를 사용하여 서버에 GET 요청을 보냅니다.
      const response = await fetch(`${SERVER_URL}/oauth/naver`, {
        method: "GET",
        credentials: "include",
        mode: "no-cors"
      });

      // 응답 데이터를 JSON 형식으로 파싱합니다.
      const data = await response.json();

      // 서버에서 받은 데이터를 처리합니다.
      console.log(data); // 예를 들어, 서버에서 받은 응답을 콘솔에 출력하거나 다른 작업을 수행할 수 있습니다.
    } catch (error) {
      console.error("서버 요청 실패:", error);
    }
  };
  */



  const goToGoogleOauth = () => {
    fetch(`${SERVER_URL}/oauth/google`, {
      method: "GET",
      credentials: "include",
      mode: "no-cors"
    })
    .then((response) => {
      console.log(response);
      if (response) {
        console.log("구글 로그인 성공!");
        window.location.href = `${process.env.REACT_APP_SERVER_URL}/oauth/google`;
      } else {
        console.log("구글 로그인 실패");
      }
    })
    .catch((error) => console.error("구글 로그인 에러:", error));
  };

  const goToNaverOauth = async () => {
    try {
      const response = await axios.get(`${SERVER_URL}/oauth/naver`);
      const { authorizationUrl } = response.data;
      window.location.href = authorizationUrl;
    } catch (error) {
      console.error("네이버 로그인 에러:", error);
    }
  };
    ///////////
    // fetch(`${SERVER_URL}/oauth/naver/callback`)
    // .then((response) => {
    //   if (!response.ok) {
    //     throw new Error("네이버 로그인 요청에 실패했습니다.");
    //   }
    //   return response.json(); // JSON 형식의 응답 데이터를 파싱하여 반환
    // })
    // .then((data) => {
    //   console.log(data); // 서버에서 보낸 데이터 출력
    //   // 여기서 받은 데이터를 이용하여 클라이언트에서 필요한 작업 수행
    // })
    // .catch((error) => {
    //   console.error("데이터를 가져오는 데 실패했습니다:", error);
    // });
  //};

  const goToKakaoOauth = () => {
    fetch(`${SERVER_URL}/oauth/kakao`, {
      method: "GET",
      credentials: "include",
      mode: "no-cors"
    })
    .then((response) => {
      console.log(response);
      if (response) {
        console.log("카카오 로그인 성공!");
        window.location.href = `${process.env.REACT_APP_SERVER_URL}/oauth/kakao`;
      } else {
        console.log("카카오 로그인 실패");
      }
    })
    .catch((error) => console.error("카카오 로그인 에러:", error));
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
