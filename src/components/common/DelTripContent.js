import React from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";

const DelTripContent = () => {
  return (
    <StDelTripContent>
      <TitleTypo>삭제하시겠습니까?</TitleTypo>
      <ContentDiv>
        <ContentP>
          여행 삭제 시 여행에 포함된 일기가 모두 삭제되며 복구할 수 없습니다.
        </ContentP>
      </ContentDiv>
    </StDelTripContent>
  );
};

const StDelTripContent = styled.div`
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
  font-family: var(--pretendard-medium);
  letter-spacing: 1px;
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

export default DelTripContent;
