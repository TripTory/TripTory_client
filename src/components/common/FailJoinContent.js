import React from "react";
import styled from "styled-components";

const AcceptJoinContent = () => {
  return (
    <AcceptContent>
      <ContentDiv>
        <ContentP>
          존재하지 않는 코드입니다.
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
  padding:  2rem 1em;
  margin: 1rem;
`;

const ContentP = styled.p`
  font-size: 2rem;
  text-align: center;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
  line-height: 1.5rem;
  font-weight: 800;
  line-height : normal;
`;

export default AcceptJoinContent;
