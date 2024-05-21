import React from "react";
import styled from "styled-components";

const SuccessCopyContent = () => {
  return (
    <SuccessContent>
      <ContentDiv>
        <ContentP>
          여행 코드를 복사했습니다.
        </ContentP>
      </ContentDiv>
    </SuccessContent>
  );
};

const SuccessContent = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
`;


const ContentDiv =styled.div`
  padding: 2rem 1em;
  margin: 1rem;
`;

const ContentP = styled.p`
  font-size: 1.8rem;
  text-align: center;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
  line-height: 1.5rem;
  font-weight: 700;
  line-height : normal;
`;

export default SuccessCopyContent;
