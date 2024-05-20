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
import gunsanImage from "../../assets/images/gunsan.jpg";
// import ulsanImage from "../../assets/images/ulsan.jpg";
// import jejuImage from "../../assets/images/jeju.jpg";
// import busanImage from "../../assets/images/busan.jpg";
// import gwangjuImage from "../../assets/images/gwangju.jpg";

export default function TripListItem(props) {
  // const getImagePath = () => {
  //   return require(props.data.travelimg);
  // };
  // console.log(props.data.title);

  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const goToDiaryList = () => {
    // navigate("/triptable", {state: props.data._id});
    navigate("/triptable", {state: {id: props.data._id, title: props.data.title}});
    // console.log(props.data._id);

  };
  const goToDel = () => {
    closeModal();
    //여행 삭제시 이루어져야하는 로직 추가 예정
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToEdit = () => {
    navigate("/addtrip", {state: props.data._id});
  };

  return (
    <StTripListItem onClick={goToDiaryList}>
      <ListItem>
        <ListItemAvatar>
          <Avatar src={props.data.travelimg}/>
        </ListItemAvatar>
        <InfoDiv>
          <TitleP>{props.data.title}</TitleP>
          <DateP>
            {props.data.startdate.slice(0, 10)}~{props.data.enddate.slice(0, 10)}
          </DateP>
          <LocationDiv>
            <LocationOnIcon sx={{ fontSize: 12 }} />
            <LocationP>{props.data.location.region}</LocationP>
          </LocationDiv>
        </InfoDiv>
        <DeleteDiv>
          <ModiDiv>
            <p style={{ color: "#a1a1a1" }} onClick={goToEdit}>
              수정
            </p>
          </ModiDiv>
          <DelDiv>
            <p style={{ color: "#a1a1a1" }} onClick={toggleModal}>
              삭제
            </p>
          </DelDiv>
        </DeleteDiv>
      </ListItem>
      {isModalOpen && (
        <CancelModal
          content={<DelTripContent />}
          closeModals={closeModal}
          buttons={
            <StCancelButtons>
              <NoBtn onClick={closeModal}>아니오</NoBtn>
              <YesBtn onClick={goToDel}>네</YesBtn>
            </StCancelButtons>
          }
          w="80%"
          h="20%"
        />
      )}
    </StTripListItem>
  );
}

TripListItem.propTypes = {
  data: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  startdate: PropTypes.string.isRequired,
  enddate: PropTypes.string.isRequired,
  travelimg: PropTypes.string.isRequired,
};

const CancelModal = styled(Modal)``;

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
  background-color: #d9d9d9;
  width: 40%;
  height: 3rem;
  border: none;
  border-radius: 2rem;
  font-size: 1.3rem;
  color: black;
  font-weight: bolder;
`;
