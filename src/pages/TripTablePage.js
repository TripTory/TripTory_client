import React from "react";
import COLOR from "../styles/color";
import styled from "styled-components";
import Greenbar from "../assets/icons/greenbar.svg";
import { Height } from "@mui/icons-material";
export default function TripTablePage() {
  const dummyTitle = "마루와 함께하는 부산";
  return (
    <StTripTablePage>
      <TitleDiv>
        <img src={Greenbar} style={{ height: "2.7rem" }} />
        <TitleP>{dummyTitle}</TitleP>
      </TitleDiv>
    </StTripTablePage>
  );
}

const StTripTablePage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const TitleDiv = styled.div`
  display: flex;
  justify-content: baseline;
  align-items: center;
  border: 1px solid red;
  width: 100%;
  height: 10%;
`;

const TitleP = styled.p`
  font-size: 2.2rem;
  padding-left: 1rem;
`;

const MainDiv = styled.div``;

const FriendDiv = styled.div``;

const DiaryDiv = styled.div``;

const SemititleDiv = styled.div``;

const SemititleP = styled.p``;

const DiaryListDiv = styled.div``;
