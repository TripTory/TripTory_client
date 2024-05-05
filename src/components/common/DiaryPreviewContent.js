import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { PiMapPinFill } from "react-icons/pi";
import { COLOR } from "../../styles/color";

const DiaryPreviewContent = ({ diary }) => {
  return (
    <ContentDiv>
      <ImgDiv>
        <DiaryImage src={diary.imagePath} />
      </ImgDiv>
      <TitleDiv>{diary.diaryTitle}</TitleDiv>
      <DateDiv>
        {diary.year}.{diary.month}.{diary.day} | {diary.author}
      </DateDiv>
      <PlaceDiv>
        <PinIcon />
        {diary.place}
      </PlaceDiv>
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
  width: 100%;
  height: 100%;
`;

const ImgDiv = styled.div`
  width: 100%;
  height: 65%;
  display: flex;
  justify-content: center;
`;

const DiaryImage = styled.img`
  width: 100%;
  border-radius: 8px;
  margin: 2rem 2rem 1rem 2rem;
  max-width: 100%;
  max-height: 100%;
`;

const TitleDiv = styled.div`
  width: 100%;
  height: 15%;
  font-size: 2rem;
  font-weight: 800;
  padding: 0.5rem 2.2rem;
  display: flex;
  align-items: center;
`;

const DateDiv = styled.div`
  width: 100%;
  height: 10%;
  font-size: 1.5rem;
  padding: 0.5rem 2.2rem;
  color: gray;
  display: flex;
  align-items: center;
`;

const PlaceDiv = styled.div`
  width: 100%;
  height: 10%;
  font-size: 1.5rem;
  padding: 0.5rem 2.2rem;
  color: gray;
  display: flex;
  align-items: center;
`;

const PinIcon = styled(PiMapPinFill)`
  width: 1.5rem;
  height: 1.5rem;
  color: ${COLOR.MAIN_GREEN};
  margin: 0.1rem 0.1rem 0.1rem 0rem;
`;
