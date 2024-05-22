import { atom } from "recoil";

export const dialogState = atom({
  key: "dialogState",
  default: false,
});

export const tripNameState = atom({
  key: "tripName",
  default: "",
});
