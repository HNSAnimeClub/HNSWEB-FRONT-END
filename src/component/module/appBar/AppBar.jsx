import React, { useState } from "react";
import style from "./appBar.module.less";
import HNSAvatar from "../../common/hnsAvatar/HNSAvatar";
import {
  CosmeticBrush,
  Fire,
  GameThree,
  Headwear,
  Platte,
  Remind,
  ThinkingProblem,
  TvOne,
} from "@icon-park/react";
import { useRecoilState } from "recoil";
import { useAppBarStore } from "./store";

export default function AppBar() {
  const items = [
    { title: "热门", icon: <Fire /> },
    { title: "游戏", icon: <GameThree /> },
    { title: "番剧", icon: <TvOne /> },
    { title: "cosplay", icon: <Headwear /> },
    { title: "绘画", icon: <Platte /> },
    { title: "美妆", icon: <CosmeticBrush /> },
    { title: "乐子人", icon: <ThinkingProblem /> },
  ];

  const [target, setTarget] = useRecoilState(useAppBarStore);
  const changeItem = (index) => setTarget(index);

  return (
    <div className={style.box}>
      <div className={style.top}>
        <div>
          <span>HNS-WEB</span>
        </div>

        <div className={style.right}>
          <div className={style.toolbar}>
            <div className={style.divider} />
            <Remind className={style.icon} />
          </div>

          <HNSAvatar
            src={"https://img-static.mihoyo.com/avatar/avatarDefaultPc.png"}
            className={style.avatar}
          />
        </div>
      </div>
      <div className={style.bottom}>
        {items.map(({ title, icon }, index) => (
          <span
            className={`${style.item} ${target === index && style.active}`}
            key={index}
            onClick={() => changeItem(index)}
          >
            {icon}
            {title}
          </span>
        ))}
      </div>
    </div>
  );
}
