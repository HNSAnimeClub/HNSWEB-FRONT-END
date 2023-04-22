import React from "react";
import style from "./basePage.module.less";
import { Outlet } from "react-router";
import AppBar from "../appBar/AppBar";

export default function BasePage() {
  return (
    <div className={style.box}>
      <div className={style.appBar}>
        <AppBar />
      </div>
      <div className={style.outlet}>
        <Outlet />
      </div>
    </div>
  );
}
