import styled from "styled-components";
import React from "react";
import { PropTypes } from "prop-types";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import ListItem from "@mui/material/ListItem";
// import Busan from "../../assets/images/busan.jpg";

export default function RecomListItem(props) {
  return (
    <StRecomListItem>
      <ListItem sx={{ width: "100%", height: "100%" }}>
        <ItemCard sx={{ width: "100%", height: "100%" }}>
          <CardMedia
            sx={{ width: "100%", height: "70%" }}
            image={require("../../assets/images/busan.jpg")}
          />
          <CardContent sx={{ width: "100%", height: "30%" }}>
            <Typography gutterBottom variant="h5" component="div">
              부산시
            </Typography>
            <Typography variant="body2" color="text.secondary">
              부산부산부산부산
            </Typography>
          </CardContent>
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
  border: 1px solid black;
  /* padding: 0.1rem; */
`;

const ItemCard = styled(Card)`
  width: 100%;
  height: 100%;
  /* border: 1px solid blue; */
`;

