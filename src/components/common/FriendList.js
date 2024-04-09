import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Karina from "../../assets/images/karina.png";

const FriendList = ({ friends }) => {
  return (
    <div>
      <MyFriend>내 일행</MyFriend>
      <ul>
        {friends.map((friend, index) => (
          <li key={index}>
            <FriendItemDiv>
              <FriendImgDiv>
                <FriendImg src={Karina}></FriendImg>
              </FriendImgDiv>
              <FriendNameDiv>{friend.friendName}</FriendNameDiv>
            </FriendItemDiv>
          </li>
        ))}
      </ul>
    </div>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      friendName: PropTypes.string.isRequired,
      imagePath: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default FriendList;

const MyFriend = styled.p`
  padding: 2rem;
  margin: 0rem 0.5rem;
  font-size: 2rem;
  font-weight: 900;
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
  font-weight: 900;
  display: flex;
  align-items: center;
  margin: 1rem 1.5rem;
`;