import React, { useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { PiMapPinFill } from "react-icons/pi";
import { COLOR } from "../../styles/color";
import leftBtn from "../../assets/icons/diary_left_btn.svg";
import rightBtn from "../../assets/icons/diary_right_btn.svg";

const DiaryPreviewContent = ({ diaries }) => {

  if (!diaries || diaries.length === 0) {
    return null; // diaries가 null이거나 비어있으면 렌더링하지 않음
  }

  const sliderRef = useRef(null);

  const slideLeft = () => {
    sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth;
  };

  const slideRight = () => {
    sliderRef.current.scrollLeft += sliderRef.current.offsetWidth;
  };

  return (
    <ContentWrapper>
      <Slider ref={sliderRef}>
        {diaries.map((diary, index) => (
          <DiaryEntry key={index}>
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
          </DiaryEntry>
        ))}
      </Slider>
      {diaries.length > 1 && (
        <>
          <ButtonLeft onClick={slideLeft}><img src={leftBtn}/></ButtonLeft>
          <ButtonRight onClick={slideRight}><img src={rightBtn}/></ButtonRight>
        </>
      )}
    </ContentWrapper>
  );
};

export default DiaryPreviewContent;

DiaryPreviewContent.propTypes = {
  diaries: PropTypes.arrayOf(
    PropTypes.shape({
      year: PropTypes.number.isRequired,
      month: PropTypes.number.isRequired,
      day: PropTypes.number.isRequired,
      place: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      diaryTitle: PropTypes.string.isRequired,
      imagePath: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
`;

const Slider = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
`;

const DiaryEntry = styled.div`
  flex: 0 0 auto;
  width: 100%;
  scroll-snap-align: start;
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

const Button = styled.button`
  position: absolute;
  top: 35%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  font-size: 2rem;
  cursor: pointer;
`;

const ButtonLeft = styled(Button)`
  left: -1.5rem;
`;

const ButtonRight = styled(Button)`
  right: -1.5rem;
`;
