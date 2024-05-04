import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { PiMapPinFill } from "react-icons/pi";
import { COLOR } from "../../styles/color";

const DiaryPreviewContent = ({ diary }) => {
  return (
    <ContentDiv>
      <ImgDiv><DiaryImage src={diary.imagePath}/></ImgDiv>
      <TitleDiv>{diary.diaryTitle}</TitleDiv>
      <DateDiv>{diary.year}.{diary.month}.{diary.day} | {diary.author}</DateDiv>
      <PlaceDiv><PinIcon />{diary.place}</PlaceDiv>
    </ContentDiv>
  );
};

export default DiaryPreviewContent;

DiaryPreviewContent.propTypes = {
  diary: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        year: PropTypes.number.isRequired,
        month: PropTypes.number.isRequired,
        day: PropTypes.number.isRequired,
        place: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        diaryTitle: PropTypes.string.isRequired,
        imagePath: PropTypes.string.isRequired,
      }),
    ),
    PropTypes.object, // diary가 객체인 경우도 허용
    PropTypes.oneOf([null]), // null인 경우도 허용
  ]).isRequired,
};

const ContentDiv = styled.div`
`;

const ImgDiv = styled.div`
  display: flex;
  justify-content: center;
`;


const DiaryImage = styled.img`
  width: 90%;
  height: 15rem;
  border-radius: 8px;
  margin: 2rem 2rem 1rem 2rem;
`;

const TitleDiv = styled.div`
  font-size: 2rem;
  font-weight: 800;
  padding: 0.5rem 2.2rem;
`;

const DateDiv = styled.div`
  font-size: 1.5rem;
  padding: 0.5rem 2.2rem;
  color: gray;
`;

const PlaceDiv = styled.div`
  font-size: 1.5rem;
  padding: 0.5rem 2.2rem;
  color: gray;
`;

const PinIcon = styled(PiMapPinFill)`
  width: 1.5rem;
  height: 1.5rem;
  color: ${COLOR.MAIN_GREEN};
  margin: 0.1rem;
`;

