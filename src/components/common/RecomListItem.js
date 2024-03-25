import styled from "styled-components";
import React from "react";
// import { PropTypes } from "prop-types";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import ListItem from "@mui/material/ListItem";
import { Title } from "@mui/icons-material";

export default function RecomListItem(props) {
  return (
    <StRecomListItem>
      <ListItem
        sx={{
          width: "100%",
          height: "100%",
          padding: "0.2rem 0.6rem 0.2rem 0.6rem",
        }}
      >
        <ItemCard sx={{ width: "100%", height: "100%" }}>
          <CardMedia
            sx={{ width: "100%", height: "70%" }}
            image={require("../../assets/images/busan.jpg")}
          />
          <InfoCardContent sx={{ width: "100%", height: "30%" }}>
            <TitleP>부산시</TitleP>
            <Typography variant="body2" color="text.secondary">
              시원한 바다를 느껴보아요
            </Typography>
          </InfoCardContent>
        </ItemCard>
      </ListItem>
    </StRecomListItem>
  );
}

//TripListItem.propTypes = {
//  item: PropTypes.string.isRequired,
//};

const StRecomListItem = styled.div`
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
  /* padding: 0.1rem; */
`;

const ItemCard = styled(Card)`
  width: 14rem;
  height: 17rem;
  /* border: 1px solid blue; */
`;

const InfoCardContent = styled(CardContent)`
  display: flex;
  justify-content: center;
  align-items: baseline;
  flex-direction: column;
  margin-top: 0.5rem;
  padding-left: 1rem;
`;

const TitleP = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  margin-right: 0.2rem;
`;
