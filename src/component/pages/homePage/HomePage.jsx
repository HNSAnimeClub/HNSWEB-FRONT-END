import React from "react";
import { useRecoilValue } from "recoil";
import { useAppBarStore } from "../../module/appBar/store";
import style from "./homePage.module.less"
import  Popular  from "./popular/Popular";

export default function HomePage() {
  const target = useRecoilValue(useAppBarStore);

  const componentMap = [<Popular />];
  return <div className={style.box}>{componentMap[target]}</div>;
}


