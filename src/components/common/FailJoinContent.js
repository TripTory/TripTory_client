import React from "react";
import styled from "styled-components";

const FailJoinContent = () => {
  return (
    <FailContent>
      <ContentDiv>
        <ContentP>
          이미 참여중이거나 <br/> 존재하지 않는 여행입니다.
        </ContentP>
      </ContentDiv>
    </FailContent>
  );
};

const FailContent = styled.div`
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

export default FailJoinContent;
