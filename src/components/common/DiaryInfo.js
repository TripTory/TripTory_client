import React from "react";
import styled from "styled-components";
import { COLOR } from "../../styles/color";
import PropTypes from "prop-types";
import { IoMdPin } from "react-icons/io";
import Karina from "../../assets/images/karina.png";

const DiaryInfo = ({ diaryInfo }) => {
  return (
    <InfoContainer>
      <TitleDiv>신나는 바다 여행</TitleDiv>
      <DatePlaceContainer>
        <DateDiv>2024.03.11</DateDiv>
        <PinIcon /><PlaceDiv>을왕리 해수욕장</PlaceDiv>
      </DatePlaceContainer>
      <AuthorContainer>
        <AuthorImg src={Karina}></AuthorImg>
        <AuthorDiv>카리나</AuthorDiv>
      </AuthorContainer>
    </InfoContainer>
  );
};

DiaryInfo.propTypes = {
  diaryInfo: PropTypes.arrayOf(
    PropTypes.shape({
      diaryTitle: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      place: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      author_img: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default DiaryInfo;

const InfoContainer = styled.div`
  width: 90%;
  border-bottom: 1px solid ${COLOR.MAIN_EMER_LIGHT};
  border-top: 1px solid ${COLOR.MAIN_EMER_LIGHT};
  margin: auto;
  padding: 2rem;
`;

const TitleDiv = styled.div`
  font-size: 2rem;
  font-weight: 700;
  padding: 0.8rem 0.5rem;
`;

const DatePlaceContainer = styled.div`
  display: flex;
  justify-content: start;
  padding: 1rem 0.5rem;
  color: #7e7e7e;
`;

const DateDiv = styled.div`
  font-size: 1.7rem;
  font-weight: 700;
`;

const PinIcon = styled(IoMdPin)`
  width: 1.9rem;
  height: 1.9rem;
  margin: 0rem 0rem 0rem 0.8rem;
  color: ${COLOR.MAIN_GREEN};

`;

const PlaceDiv = styled.div`
  font-size: 1.7rem;
  font-weight: 700;
`;

const AuthorContainer = styled.div`
  display: flex;
  justify-content: start;
  padding: 0.8rem;
`;

const AuthorDiv = styled.div`
  font-size: 1.7rem;
  color: #777777;
  font-weight: 700;
  display: flex;
  align-items: center;
  
`;

const AuthorImg = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 1.5rem;
  margin: 0rem 0.8rem 0rem 0rem;

`;
