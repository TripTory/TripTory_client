import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { COLOR } from "../../styles/color";
import leftBtn from "../../assets/icons/diary_left_btn.svg";
import rightBtn from "../../assets/icons/diary_right_btn.svg";
import moment from "moment";

const DiaryPreviewContent = ({ diaries }) => {
  const navigate = useNavigate();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const sliderRef = useRef(null);

  const slideLeft = () => {
    if (sliderRef.current.scrollLeft === 0) return;
    sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth;
    setCurrentSlideIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const slideRight = () => {
    if (
      sliderRef.current.scrollLeft + sliderRef.current.offsetWidth >=
      sliderRef.current.scrollWidth
    )
      return;
    sliderRef.current.scrollLeft += sliderRef.current.offsetWidth;
    setCurrentSlideIndex((prevIndex) =>
      Math.min(prevIndex + 1, diaries.length - 1),
    );
  };

  let content = null; // 조건부 렌더링을 위한 변수

  if (diaries && diaries.length > 0) {
    content = (
      <ContentWrapper>
        <Slider ref={sliderRef}>
          {diaries.map((diary, index) => (
            <DiaryEntry key={index}>
              <ImgDiv>
                <DiaryImage src="https://health.chosun.com/site/data/img_dir/2023/05/31/2023053102582_0.jpg" />
              </ImgDiv>
              <TitleDiv>{diary.diaryTitle}</TitleDiv>
              <DateDiv>
                {moment(diary.date).format("YYYY.MM.DD")} | {diary.username}
              </DateDiv>
            </DiaryEntry>
          ))}
        </Slider>
        {diaries.length > 1 && (
          <>
            <ButtonLeft onClick={slideLeft}>
              <img src={leftBtn} />
            </ButtonLeft>
            <ButtonRight onClick={slideRight}>
              <img src={rightBtn} />
            </ButtonRight>
          </>
        )}
      </ContentWrapper>
    );
  }


  const goToDiary = () => {
    const currentDiary = diaries[currentSlideIndex];
    navigate("/showdiary", {state:currentDiary.diaryID});
  };

  return (
    <div>
      {content}
      <ButtonContainer><GotoDiaryBtn onClick={goToDiary}>일기 보러 가기</GotoDiaryBtn></ButtonContainer>
    </div>
  );
};

export default DiaryPreviewContent;

DiaryPreviewContent.propTypes = {
  diaries: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      diaryID: PropTypes.string.isRequired,
      diaryTitle: PropTypes.string.isRequired,
      imagePath: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const ContentWrapper = styled.div`
  width: 100%;
  height: 85%;
  overflow: hidden;
  position: relative;
`;

const Slider = styled.div`
  width: 98%;
  height: 100%;
  display: flex;
  overflow: hidden;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  margin: auto;
`;

const DiaryEntry = styled.div`
  flex: 0 0 auto;
  width: 100%;
  scroll-snap-align: start;
`;

const ImgDiv = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  margin: auto;
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
  height: 16%;
  font-size: 2.2rem;
  font-weight: 800;
  padding: 0.5rem 2.2rem 0.3rem 2.2rem;
  display: flex;
  align-items: center;
`;

const DateDiv = styled.div`
  width: 100%;
  height: 11%;
  font-size: 1.6rem;
  padding: 0.5rem 2.2rem;
  color: gray;
  display: flex;
  align-items: center;
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

const ButtonContainer = styled.div`
  width: 100%;
  height: 18%;
  display: flex;
  justify-content: center;
`;

const GotoDiaryBtn = styled.button`
  background-color: ${COLOR.MAIN_EMER};
  width: 95%;
  height: 3.7rem;
  border: none;
  border-radius: 2rem;
  font-size: 1.6rem;
  color: white;
  font-weight: bolder;
  margin: 1rem 0rem;
`;
