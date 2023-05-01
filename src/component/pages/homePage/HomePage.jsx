import React from "react";
import { useRecoilValue } from "recoil";
import { useAppBarStore } from "../../module/appBar/store";
import style from "./homePage.module.less";
import Topic from "./popular/Topic";
import * as API from "../../../utils/request/interface/home";

export default function HomePage() {
  const target = useRecoilValue(useAppBarStore);

  const apiMap = (key) => {
    switch (key) {
      case 0:
        return API.getHomeTopic;
      default:
        return API.getHomeTopic
    }
  };

  return (
    <div className={style.box}>
      <Topic api={apiMap(target)} />
    </div>
  );
}
