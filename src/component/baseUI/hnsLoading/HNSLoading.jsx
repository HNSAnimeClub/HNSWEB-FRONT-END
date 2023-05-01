/**
 * @name: HNSLoading.jsx
 * @author: 米洛
 * @date: 2022-08-28 12:48
 * @description：加载组件
 */

import React from "react";
import style from "./hnsLoading.module.less";

function HNSLoading(props) {
  let { fullScreen, isLoading, children } = props;
  // 全屏模式的样式配置
  const fullScreenOptions = {
    height: "100vh",
    position: "fixed",
    left: "0",
    right: "0",
  };
  isLoading = isLoading === undefined ? true : isLoading;

  return (
    <div
      className={`${style.container} ${fullScreen ? style.whiteBlank : ""} ${
        isLoading ? style.show : style.close
      }`}
      style={fullScreen ? fullScreenOptions : null}
    >
      <div className={`${style.circle}`} id={style.circle_one} />
      <div className={`${style.circle}`} id={style.circle_two} />
      <div className={`${style.circle}`} id={style.circle_three} />
      {children}
    </div>
  );
}

export default HNSLoading;
