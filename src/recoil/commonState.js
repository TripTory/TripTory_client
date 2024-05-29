import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const dialogState = atom({
  key: "dialogState",
  default: false,
});

export const tripIdState = atom({
  key: "tripId",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const diaryIdState = atom ({
  key: "diaryId",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const userNameState = atom ({
  key: "userName",
  default: "",
});
