import styled from "styled-components";
import React from "react";
import { PropTypes } from "prop-types";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import ListItem from "@mui/material/ListItem";
import CardMedia from "@mui/material/CardMedia";
import Busan from "../../assets/images/busan.jpg";

export default function RecomListItem(props) {
  return (
    <StRecomListItem>
      <ListItem>
        <Card>
          <img src={Busan}/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              부산시
            </Typography>
            <Typography variant="body2" color="text.secondary">
              부산부산부산부산
            </Typography>
          </CardContent>
        </Card>
      </ListItem>
    </StRecomListItem>
  );
}

//TripListItem.propTypes = {
//  item: PropTypes.string.isRequired,
//};

const StRecomListItem = styled.div`
  width: 10rem;
  height: 90%;
`;
