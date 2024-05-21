import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PiMapPinFill } from "react-icons/pi";
import { COLOR } from "../../styles/color";
import leftBtn from "../../assets/icons/diary_left_btn.svg";
import rightBtn from "../../assets/icons/diary_right_btn.svg";
import { useRecoilState } from "recoil";

const DiaryPreviewContent = ({ diaries }) => {
  // const [title, setTitle] = useRecoilState(TITLE);
  // const [content, setContent] = useRecoilState(CONTENT);
  // const [date, setDate] = useRecoilState(DATE);
  // const [img, setImg] = useRecoilState(IMG);
  // const [username, setUsername] = useRecoilState(USERNAME);

  const navigate = useNavigate();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  if (!diaries || diaries.length === 0) {
    return null; // diaries가 null이거나 비어있으면 렌더링하지 않음
  }

  const sliderRef = useRef(null);

  const slideLeft = () => {
    if (sliderRef.current.scrollLeft === 0) return;
    sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth;
    setCurrentSlideIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const slideRight = () => {
    if (sliderRef.current.scrollLeft + sliderRef.current.offsetWidth >= sliderRef.current.scrollWidth) return;
    sliderRef.current.scrollLeft += sliderRef.current.offsetWidth;
    setCurrentSlideIndex((prevIndex) => Math.min(prevIndex + 1, diaries.length - 1));
  };

  const goToDiary = () => {
    const currentDiary = diaries[currentSlideIndex];
    // setTitle(currentDiary[title]);
    // setContent(currentDiary[content]);
    // setDate(currentDiary[date]);
    // setImg(currentDiary[img]);
    // setUsername(currentDiary[username]);
    navigate("/showdiary");
  };

  return (
    <div>
      <ContentWrapper>
        <Slider ref={sliderRef}>
          {diaries.map((diary, index) => (
            <DiaryEntry key={index}>
              <ImgDiv>
                <DiaryImage src={diary.imgpath} />
              </ImgDiv>
              <TitleDiv>{diary.title}</TitleDiv>
              <DateDiv>
                {diary.date} | {diary.username}
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
            <ButtonLeft onClick={slideLeft}>
              <img src={leftBtn} />
            </ButtonLeft>
            <ButtonRight onClick={slideRight}>
              <img src={rightBtn} />
            </ButtonRight>
          </>
        )}
      </ContentWrapper>
      <ButtonContainer><GotoDiaryBtn onClick={goToDiary}/></ButtonContainer>
    </div>
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
  height: 85%;
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

const ButtonContainer = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: center;
`;

const GotoDiaryBtn = styled.button`
  background-color: ${COLOR.MAIN_EMER};
  width: 95%;
  height: 3.5rem;
  border: none;
  border-radius: 2rem;
  font-size: 1.5rem;
  color: white;
  font-weight: bolder;
  margin: 1rem 0rem;
`;
