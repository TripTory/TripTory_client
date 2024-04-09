import styled from "styled-components";
import { COLOR } from "../../styles/color";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Modal from "../../components/common/Modal";
import { PropTypes } from "prop-types";
import DelTripContent from "../../components/common/DelTripContent";

export default function TripListItem(props) {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const goToDel = () => {
    closeModal();
    //여행 삭제시 이루어져야하는 로직 추가 예정
  };

  const toggleModal = () => {
    console.log(isModalOpen);
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToEdit = () => {
    navigate("/addtrip");
  };

  return (
    <StTripListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <InfoDiv>
          <TitleP>{props.item}</TitleP>
          <DateP>2023.02.13~2023.02.16</DateP>
          <LocationDiv>
            <LocationOnIcon sx={{ fontSize: 12 }} />
            <LocationP>광주광역시</LocationP>
          </LocationDiv>
        </InfoDiv>
        <DeleteDiv>
          <ModiDiv>
            <p style={{ color: "#a1a1a1" }} onClick={goToEdit}>수정</p>
          </ModiDiv>
          <DelDiv>
            <p style={{ color: "#a1a1a1" }} onClick={toggleModal}>삭제</p>
          </DelDiv>
        </DeleteDiv>
      </ListItem>
      {isModalOpen && (
        <CancelModal
          content={<DelTripContent/>}
          closeModals={closeModal}
          buttons={<StCancelButtons>
            <NoBtn onClick={closeModal}>아니오</NoBtn>
            <YesBtn onClick={goToDel}>네</YesBtn>
          </StCancelButtons>}
          w="80%"
          h="20%"
        />
      )}
    </StTripListItem>
  );
}

TripListItem.propTypes = {
  item: PropTypes.string.isRequired,
};

const CancelModal = styled(Modal)`
`;

const StTripListItem = styled.div`
  display: flex;
  justify-content: space-between;
  border: 0.2rem solid rgba(228, 228, 228);
  border-radius: 1rem;
  width: 95%;
  height: 8rem;
  margin-bottom: 0.2rem;
`;

const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.1rem;
  width: 60%;
`;

const TitleP = styled.p`
  color: ${COLOR.MAIN_EMER};
  font-size: 1.2rem;
  font-weight: bold;
  font-family: var(--inter-extrabold);
  margin-bottom: 0.1rem;
`;

const DateP = styled.p`
  font-size: 0.9rem;
  color: rgba(119, 119, 119);
`;

const LocationDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: baseline;
  padding-top: 0.3rem;
`;

const LocationP = styled.p`
  font-size: 0.8rem;
  color: rgba(119, 119, 119);
`;

const DeleteDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 20%;
  margin-left: 5rem;
`;

const ModiDiv = styled.div`
  padding-right: 0.3rem;
`;

const DelDiv = styled.div`
  border-left: 1px solid #a1a1a1;
  border-right: 1rem #a1a1a1;
  padding-left: 0.3rem;
`;

const StCancelButtons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const YesBtn = styled.button`
  background-color: ${COLOR.MAIN_EMER};
  width: 40%;
  height: 3rem;
  border: none;
  border-radius: 2rem;
  font-size: 1.3rem;
  color: white;
  font-weight: bolder;
`;

const NoBtn = styled.button`
  background-color: #D9D9D9;
  width: 40%;
  height: 3rem;
  border: none;
  border-radius: 2rem;
  font-size: 1.3rem;
  color: black;
  font-weight: bolder;
`;
