import React from "react";
import styled from "styled-components";

const AcceptJoinContent = () => {
  return (
    <AcceptContent>
      <ContentDiv>
        <ContentP>
          남궁희님의 초대를 <br/>수락하시겠습니까?
        </ContentP>
      </ContentDiv>
    </AcceptContent>
  );
};

const AcceptContent = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
`;


const ContentDiv =styled.div`
  width: 90%;
  margin: 1rem;
`;

const ContentP = styled.p`
  font-size: 2rem;
  text-align: center;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
  line-height: 1.5rem;
  font-weight: 800;
  padding: 1rem;
  line-height : normal;
`;

export default AcceptJoinContent;
