import styled from "styled-components";
import React from "react";
import { PropTypes } from "prop-types";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import ListItem from "@mui/material/ListItem";
import gunsanImage from "../../assets/images/gunsan.jpg";
import ulsanImage from "../../assets/images/ulsan.jpg";
import jejuImage from "../../assets/images/jeju.jpg";
import busanImage from "../../assets/images/busan.jpg";
import gwangjuImage from "../../assets/images/gwangju.jpg";

export default function RecomListItem(props) {
  const getImagePath = (destination) => {
    switch (destination) {
      case "군산":
        return gunsanImage;
      case "울산":
        return ulsanImage;
      case "제주":
        return jejuImage;
      case "부산":
        return busanImage;
      case "광주":
        return gwangjuImage;
      default:
        return "";
    }
  };

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
            image={getImagePath(props.data.destination)}
          />
          <InfoCardContent sx={{ width: "100%", height: "30%" }}>
            <TitleP>{props.data.destination}</TitleP>
            <Typography variant="body2" color="text.secondary">
              {props.data.information}
            </Typography>
          </InfoCardContent>
        </ItemCard>
      </ListItem>
    </StRecomListItem>
  );
}

RecomListItem.propTypes = {
  data: PropTypes.node.isRequired,
  destination: PropTypes.string.isRequired,
  information: PropTypes.string.isRequired,
};

const StRecomListItem = styled.div`
  width: 100%;
  height: 100%;
`;

const ItemCard = styled(Card)`
  width: 14rem;
  height: 17rem;
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
  font-family: var(--pretendard-medium);
`;
