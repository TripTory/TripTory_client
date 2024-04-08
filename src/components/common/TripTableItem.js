import React from "react";
import { COLOR } from "../../styles/color";
import styled from "styled-components";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Dot from "../../assets/icons/dot.svg";
import Busan from "../../assets/images/busan.jpg";

export default function TripTableItem() {
  return (
    <StTripTableItem>
      <ListItem
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "9.6rem",
          width: "100%",
          paddingLeft: "1rem"
        }}
      >
        <ContentDiv>
          <DotDiv>
            <img src={Dot} />
          </DotDiv>
          <InfoDiv>
            <TitleP>와~ 부산이다!!!</TitleP>
            <DateDiv>
              <DateP>2023.06.13</DateP>
              <UserP>마루</UserP>
            </DateDiv>
          </InfoDiv>
        </ContentDiv>
        <ListItemAvatar>
          <Avatar src={Busan} sx={{ width: "5rem", height: "5rem" }}></Avatar>
        </ListItemAvatar>
      </ListItem>
    </StTripTableItem>
  );
}

const StTripTableItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.2rem solid rgba(228, 228, 228);
  border-radius: 1rem;
  width: 100%;
  height: 100%;
  margin-bottom: 0.8rem;
  box-shadow: 1px 1px 3px rgba(228, 228, 228);
`;

const ContentDiv = styled.div`
  display: flex;
  justify-content: baseline;
  align-items: center;
  width: 80%;
  height: 100%;
`;

const DotDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: fit-content;
  margin-right: 1.2rem;
`;
const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.1rem;
`;

const TitleP = styled.p`
  color: ${COLOR.MAIN_BLACK};
  font-size: 1.8rem;
  font-weight: bold;
  font-family: var(--inter-extrabold);
  margin-bottom: 0.5rem;
`;

const DateDiv = styled.div`
  display: flex;
  justify-content: baseline;
  align-items: center;
`;
const DateP = styled.p`
  font-size: 1.3rem;
  color: rgba(119, 119, 119);
  border-right: 1px solid rgba(119,119,119);
  padding-right: 0.3rem;

`;

const UserP = styled.p`
  font-size: 1rem;
  color: rgba(119, 119, 119);
  padding-left: 0.3rem;
`;
