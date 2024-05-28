import { atom } from "recoil";

export const dialogState = atom({
  key: "dialogState",
  default: false,
});

export const tripNameState = atom({
  key: "tripName",
  default: "",
});

export const tripIdState = atom({
  key: "tripId",
  default: "",
});

export const diaryIdState = atom ({
  key: "diaryId",
  default: "",
});

export const userNameState = atom ({
  key: "userName",
  default: "",
});
