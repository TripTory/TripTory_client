import React from "react";
import styled from "styled-components";
import { COLOR } from "../../styles/color";
import PropTypes from "prop-types";
import moment from "moment";
import defaultImageSrc from "../../assets/images/defaultProfileImg.svg";

const DiaryInfo = ({ title, date, username, userimg }) => {
  return (
    <InfoContainer>
      <TitleDiv>{title}</TitleDiv>
      <AuthorContainer>
        <AuthorImg src={userimg ? userimg : defaultImageSrc}></AuthorImg>
        <AuthorDiv>{username}</AuthorDiv>
      </AuthorContainer>
      <DateDiv>{moment(date).format("YYYY.MM.DD")}</DateDiv>
    </InfoContainer>
  );
};

DiaryInfo.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  userimg: PropTypes.string.isRequired,
};

export default DiaryInfo;

const InfoContainer = styled.div`
  width: 90%;
  border-bottom: 1px solid ${COLOR.MAIN_EMER_LIGHT};
  border-top: 1px solid ${COLOR.MAIN_EMER_LIGHT};
  margin: auto;
  padding: 1.5rem 2rem;
`;

const TitleDiv = styled.div`
  font-size: 2rem;
  font-weight: 700;
  padding: 0.8rem 0.5rem;
`;

const DateDiv = styled.div`
  font-size: 1.7rem;
  font-weight: 700;
  padding: 1rem 0.5rem;
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
