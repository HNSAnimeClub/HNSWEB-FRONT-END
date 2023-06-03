import { atom } from "recoil";

export const useAppBarStore = atom({
  key: "useAppBarStore",
  default: {
    target: 0,
    backgroundSrc: "",
  },
});
