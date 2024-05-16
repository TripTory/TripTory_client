import styled from "styled-components";
import * as React from "react";
import PropTypes from "prop-types";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Dialog from "@mui/material/Dialog";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { dialog, dialogState } from "../../recoil/commonState";
import People from "../../assets/icons/people.svg";
import Person from "../../assets/icons/person.svg";

export default function AddTripDialog(props) {
  const [dialog, setDialog] = useRecoilState(dialogState);
  const navigate = useNavigate();

  const goToAdd = () => {
    navigate("/addtrip");
  };

  const goToParticipate = () => {
    navigate("/jointrip");
  };

  const handleClose = () => {
    setDialog(false);
  };

  return (
    <StDialog onClose={handleClose} open={dialog}>
      <AddList>
        <AddlstItm disableGutters onClick={goToAdd}>
          <AddItemBtn onClick={handleClose}>
            <IconImg src={Person} />
            <ListItemText>여행 추가하기</ListItemText>
          </AddItemBtn>
        </AddlstItm>
        <AddlstItm disableGutters onClick={goToParticipate}>
          <AddItemBtn onClick={handleClose}>
            <IconImg src={People} />
            <ListItemText>친구 여행 참여하기</ListItemText>
          </AddItemBtn>
        </AddlstItm>
      </AddList>
    </StDialog>
  );
}

AddTripDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

const StDialog = styled(Dialog)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-left: 21rem;
  padding-bottom: 36.5rem;
`;

const AddList = styled(List)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
`;

const AddlstItm = styled(ListItem)`
  width: 13rem;
  height: fit-content;
  padding: 0rem;
`;
const AddItemBtn = styled(ListItemButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  padding: 0.1rem 0rem 0.1rem 0.8rem;
`;
const IconImg = styled.img`
  margin-right: 0.7rem;
`;
