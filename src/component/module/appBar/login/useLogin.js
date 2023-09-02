import { nanoid } from "nanoid";
import { atom } from "recoil";

export const useLogin = atom({
  key: `${nanoid()}-useLogin`,
  default: false,
});
