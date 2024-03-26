import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const PlaceList = ({places}) => {
  return (
    <div>
      <ul>
        {places.map((place, index) => (
          <li key={index}>
            {place.placeName} - {place.location}
          </li>
        ))}
      </ul>
    </div>
  );
};
PlaceList.propTypes = {
  places: PropTypes.arrayOf(
    PropTypes.shape({
      placeName: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired
    })
  ).isRequired
};
export default PlaceList;
