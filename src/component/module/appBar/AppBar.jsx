import React, { useState } from "react";
import style from "./appBar.module.less";
import HNSAvatar from "../../common/hnsAvatar/HNSAvatar";
import {
  CosmeticBrush,
  Fire,
  GameThree,
  HamburgerButton,
  Headwear,
  Platte,
  Remind,
  ThinkingProblem,
  TvOne,
} from "@icon-park/react";
import { useRecoilState } from "recoil";
import { useAppBarStore } from "./store";
import { userStore } from "../../store/userStore";

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
  const { user_name, ...userInfo } = useRecoilState(userStore);
  const [open, setOpen] = useState(false);
  const changeItem = (index) => setTarget(index);

  // 移动端菜单展开收起
  const toogle = () => {
    setOpen(!open);
  };

  return (
    <div className={style.box}>
      <div className={style.top}>
        <div className={style.title}>
          <span>HNS-WEB</span>
        </div>
        {/* 移动端按钮与菜单*/}
        <HamburgerButton className={style.menuButton} onClick={toogle} />

        <div className={`${style.menu} ${open && style.menuActive}`}>
          {!user_name && <span className={style.item}>登录</span>}
          <span className={style.item}>关于我们</span>
          {user_name && <span className={style.item}>退出登录</span>}
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
