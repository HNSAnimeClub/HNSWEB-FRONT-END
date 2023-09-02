import { atom } from "recoil";
import { storageEffect } from "../../utils/tool/persists";

export const userStore = atom({
  key: "userStore",
  default: {},
  effects: [storageEffect("userStore")],
});
