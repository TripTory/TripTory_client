import styled from "styled-components";
import { COLOR } from "../../styles/color";
import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { PropTypes } from "prop-types";
export default function TripListItem(props) {
  return (
    <StTripListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <div>
          <TitleP>{props.item}</TitleP>
          <DateP>2023.02.13~2023.02.16</DateP>
          <LocationP>
            <LocationOnIcon />
            광주광역시
          </LocationP>
        </div>
      </ListItem>
    </StTripListItem>
  );
}

TripListItem.propTypes = {
  item: PropTypes.string.isRequired,
};

const StTripListItem = styled.div`
  border: 0.1rem solid rgba(228, 228, 228);
  border-radius: 1rem;
  width: 95%;
  margin-bottom: 0.2rem;

`;

const TitleP = styled.p`
  color: ${COLOR.MAIN_EMER};
  font-size: 1.2rem;
  font-weight: bold;
  font-family: var(--inter-extrabold);
  margin-bottom: 0.1rem;
`;

const DateP = styled.p`
  font-size: 0.8rem;
  color: rgba(119, 119, 119);
`;

const LocationP = styled.p`
  font-size: 0.8rem;
  color: rgba(119, 119, 119);
`;

const InfoDiv = styled.div`

`;
