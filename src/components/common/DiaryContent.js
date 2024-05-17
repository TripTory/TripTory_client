import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";


const DiaryContent = ({content}) => {
  return (
    <ContentContainer>
      {content}
    </ContentContainer>
  );
};

DiaryContent.propTypes = {
  content: PropTypes.string.isRequired,
};

export default DiaryContent;

const ContentContainer = styled.div`
  width: 95%;
  margin: auto;
  padding: 3rem 2rem;
  line-height: 180%;
  font-size: 1.6rem;
`;
