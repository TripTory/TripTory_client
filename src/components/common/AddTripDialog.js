import * as React from "react";
import PropTypes from "prop-types";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Dialog from "@mui/material/Dialog";
import { useRecoilState } from "recoil";
import { dialog, dialogState } from "../../recoil/commonState";

const emails = ["username@gmail.com", "user02@gmail.com"];

export default function AddTripDialog(props) {
  const { onClose, open } = props;
  const [dialog, setDialog] = useRecoilState(dialogState);

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={dialog}>
      <List sx={{ pt: 0 }}>
        <ListItem disableGutters>
          <ListItemButton>
            <ListItemText>직접 추가</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disableGutters>
          <ListItemButton>
            <ListItemText>친구 여행</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Dialog>
  );
}

AddTripDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};
