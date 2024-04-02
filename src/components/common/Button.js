import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { COLOR } from "../../styles/color.js";
import { useNavigate } from "react-router-dom";
const CancelButtons = (closeModals) => {
  const navigate = useNavigate();
  const goToLogin=()=> {
    navigate("/login");
  };
  return (
    <StCancelButtons>
      <NoBtn>아니오</NoBtn>
      <YesBtn onClick={goToLogin}>네</YesBtn>
    </StCancelButtons>
  );
};

const StCancelButtons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const YesBtn = styled.button`
  background-color: ${COLOR.MAIN_EMER};
  width: 40%;
  height: 3rem;
  border: none;
  border-radius: 2rem;
  font-size: 1.3rem;
  color: white;
  font-weight: bolder;
`;

const NoBtn = styled.button`
  background-color: #D9D9D9;
  width: 40%;
  height: 3rem;
  border: none;
  border-radius: 2rem;
  font-size: 1.3rem;
  color: black;
  font-weight: bolder;
`;
export default CancelButtons;
