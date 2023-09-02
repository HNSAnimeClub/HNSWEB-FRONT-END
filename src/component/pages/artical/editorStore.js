import { atom } from "recoil";

export const useEditorStore = atom({
  key: "useEditorStore",
  default: {
    title: "",
    content: "",
    img: "", // 封面
    tags: [],
  },
});
