import React from "react";
import { COLOR } from "../../styles/color";
import styled from "styled-components";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Dot from "../../assets/icons/dot.svg";
import { PropTypes } from "prop-types";
import { useRecoilState } from "recoil";
import { tripIdState, diaryIdState } from "../../recoil/commonState";
import { useNavigate } from "react-router-dom";
export default function DiaryListItem(props) {
  const [diaryId, setDiaryId] = useRecoilState(diaryIdState);
  const navigate = useNavigate();
  const goToDiary = () => {
    setDiaryId(props.data._id);
    navigate("/showdiary");
  };
  return (
    <StDiaryListItem onClick={goToDiary}>
      <ListItem
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "9.6rem",
          width: "100%",
          paddingLeft: "1rem",
        }}
      >
        <ContentDiv>
          <DotDiv>
            <img src={Dot} />
          </DotDiv>
          <InfoDiv>
            <TitleP>{props.data.title}</TitleP>
            <DateDiv>
              <DateP>{props.data.date.slice(0,10)}</DateP>
              <UserP>{props.data.userName}</UserP>
            </DateDiv>
          </InfoDiv>
        </ContentDiv>
        <ListItemAvatar>
          <Avatar src={props.img} sx={{ width: "5rem", height: "5rem" }}></Avatar>
        </ListItemAvatar>
      </ListItem>
    </StDiaryListItem>
  );
}
DiaryListItem.propTypes = {
  data: PropTypes.node.isRequired,
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  img: PropTypes.node.isRequired,
  imgpath: PropTypes.string.isRequired,
};
const StDiaryListItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.2rem solid rgba(228, 228, 228);
  border-radius: 1rem;
  width: 100%;
  height: 10rem;
  margin-bottom: 0.8rem;
  box-shadow: 1px 1px 3px rgba(228, 228, 228);
`;

const ContentDiv = styled.div`
  display: flex;
  justify-content: baseline;
  align-items: center;
  width: 80%;
  height: 100%;
`;

const DotDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: fit-content;
  margin-right: 1.2rem;
`;
const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.1rem;
`;

const TitleP = styled.p`
  color: ${COLOR.MAIN_BLACK};
  font-size: 1.8rem;
  font-weight: bold;
  font-family: var(--pretendard-medium);
  margin-bottom: 0.7rem;
`;

const DateDiv = styled.div`
  display: flex;
  justify-content: baseline;
  align-items: center;
`;
const DateP = styled.p`
  font-size: 1.3rem;
  color: rgba(119, 119, 119);
  border-right: 1px solid rgba(119, 119, 119);
  padding-right: 0.5rem;
  font-family: var(--pretendard-medium);
`;

const UserP = styled.p`
  font-size: 1.1rem;
  color: rgba(119, 119, 119);
  padding-left: 0.5rem;
  font-family: var(--pretendard-medium);
`;
