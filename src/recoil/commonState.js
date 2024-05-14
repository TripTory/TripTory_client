import { atom } from "recoil";

export const dialogState = atom({
  key: "dialogState",
  default: false,
});

export const TITLE = atom({
  key: "TITLE",
  default: "신나는 바다 여행",
});
export const CONTENT = atom({
  key: "CONTENT",
  default: "라라라라라ㅏ라라라라라라랄라ㅏ랄",
});
export const DATE = atom({
  key: "DATE",
  default: "24-01-01",
});
export const IMG = atom({
  key: "IMG",
  default: ["https://health.chosun.com/site/data/img_dir/2023/05/31/2023053102582_0.jpg"],
});
export const TRAVEL = atom({
  key: "TRAVEL",
  default: "마루와 함께하는 부산 여행",
});
export const USERID = atom({
  key: "USERID",
  default: 1111,
});
export const USERNAME = atom({
  key: "USERNAME",
  default: "카리나",
});
export const USERIMG = atom({
  key: "USERIMG",
  default: "https://health.chosun.com/site/data/img_dir/2023/05/31/2023053102582_0.jpg",
});

