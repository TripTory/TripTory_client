import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import defaultImageSrc from "../../assets/images/defaultProfileImg.svg";

const FriendList = ({ userinfos }) => {
  return (
    <div>
      <MyFriend>내 일행</MyFriend>
      <ul>
        {userinfos.map((userinfo, index) => (
          <li key={index}>
            <FriendItemDiv>
              <FriendImgDiv>
                <FriendImg src={userinfo["url"] || defaultImageSrc}></FriendImg>
              </FriendImgDiv>
              <FriendNameDiv>{userinfo["name"]}</FriendNameDiv>
            </FriendItemDiv>
          </li>
        ))}
      </ul>
    </div>
  );
};

FriendList.propTypes = {
  userinfos: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FriendList;

const MyFriend = styled.p`
  padding: 2rem;
  margin: 0rem 0.5rem;
  font-size: 2rem;
  font-family: var(--pretendard-bold);
`;

const FriendItemDiv = styled.div`
  display: flex;
  justify-content: start;
  padding: 1rem;
  margin: 0.5rem 2rem;
`;

const FriendImgDiv = styled.div``;

const FriendImg = styled.img`
  width: 6rem;
  height: 6rem;
  border-radius: 3rem;
`;

const FriendNameDiv = styled.div`
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  margin: 1rem 1.5rem;
  font-family: var(--pretendard-semibold);
`;
