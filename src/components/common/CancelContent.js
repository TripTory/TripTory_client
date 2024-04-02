import React from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";

const CancelContent = () => {
  return (
    <StCancelContent>
      <TitleTypo>정말 탈퇴하시겠어요?</TitleTypo>
      <ContentDiv>
        <ContentP>
          탈퇴 버튼 선택 시, 계정과 일기 데이터가 영구적으로 삭제되며 복구되지
          않습니다.
        </ContentP>
      </ContentDiv>
    </StCancelContent>
  );
};

const StCancelContent = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
`;

const TitleTypo = styled(Typography)`
  font-weight: bolder;
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
`;

const ContentDiv =styled.div`
  width: 90%;
  height: 50%;
`;

const ContentP = styled.p`
  font-size: 1.2rem;
  text-align: center;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
  line-height: 1.5rem;
`;

export default CancelContent;
