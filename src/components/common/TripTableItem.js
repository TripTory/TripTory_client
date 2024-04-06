import React from "react";
import { COLOR } from "../../styles/color";
import styled from "styled-components";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Dot from "../../assets/icons/dot.svg";
import { PropTypes } from "prop-types";
import Busan from "../../assets/images/busan.jpg";

export default function TripTableItem() {
  return (
    <StTripTableItem>
      <ListItem
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <ContentDiv>
          <DotDiv>
            <img src={Dot} />
          </DotDiv>
          <InfoDiv>
            <TitleP>와~ 부산이다!!!</TitleP>
            <DateDiv>
              <DateP>2023.02.13~2023.02.16</DateP>
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
  height: 8rem;
  margin-bottom: 0.2rem;
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
`;
const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.1rem;
`;

const TitleP = styled.p`
  color: ${COLOR.MAIN_BLACK};
  font-size: 1.4rem;
  font-weight: 600;
  font-family: var(--inter-extrabold);
  margin-bottom: 0.5rem;
`;

const DateDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DateP = styled.p`
  font-size: 1rem;
  color: rgba(119, 119, 119);
  border-right: 1px solid rgba(119,119,119);
  padding-right: 0.3rem;
`;

const UserP = styled.p`
  font-size: 0.8rem;
  color: rgba(119, 119, 119);
  padding-left: 0.3rem;
`;

