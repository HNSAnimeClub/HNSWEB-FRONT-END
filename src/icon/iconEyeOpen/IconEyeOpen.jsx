/**
 * @name: iconEyeOpen,jsx
 * @author: 米洛
 * @date: 2022-06-20 22:07
 * @description：睁眼图标
 */

import React from 'react';
import style from "../iconEyeClose/iconEyeClose.module.less";

function IconEyeOpen(props) {
  let width = props.width ? props.width : "36"
  let height = props.height ? props.height : "36"

  const handleClick = (e) => {
    props.onClick(e)
  }

  return (
    <svg t="1655736077555" className={style.icon} width={width} height={height} onClick={handleClick}
         viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
         p-id="3293">
      <path
        d="M611.232 467.904a35.92 35.92 0 0 1-35.36 29.376 35.888 35.888 0 0 1-35.936-35.84 35.888 35.888 0 0 1 35.904-35.84 105.824 105.824 0 0 0-60.96-19.2c-58.608 0-106.048 47.312-106.048 105.6s47.44 105.6 106.032 105.6 106.032-47.312 106.032-105.6c0-15.744-3.456-30.672-9.664-44.096zM516.64 720c83.456 0 157.856-35.328 217.856-94.864 43.648-43.312 74.784-98.144 74.784-113.136 0-15.504-30.432-70.16-73.536-113.28C676.288 339.264 601.728 304 516.64 304c-84.576 0-158.944 35.968-218.88 96.64C255.136 443.808 224 499.168 224 512c0 12.32 31.856 67.872 75.008 111.2C359.488 683.984 433.696 720 516.64 720z m0 48C299.744 768 176 557.536 176 512s120.064-256 340.64-256c220.592 0 340.64 204.768 340.64 256s-123.744 256-340.64 256z m-1.76-102.4c-85.088 0-154.048-68.768-154.048-153.6s68.96-153.6 154.032-153.6c85.072 0 154.032 68.768 154.032 153.6s-68.96 153.6-154.032 153.6z"
        p-id="3294"/>
    </svg>
  );
}

export default IconEyeOpen;