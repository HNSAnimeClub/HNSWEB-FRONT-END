/**
 * @name: iconDown.jsx
 * @author: 米洛
 * @date: 2022-07-20 21:12
 * @description：下箭头
 */

import React from 'react';
import style from './iconDown.module.less'

function IconDown(props) {
  let className = props.className ? props.className : ""
  let size = props.size ? props.size : "28"
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"
         className={`${style.icon} ${className}`}>
      <path d="M36 18L24 30L12 18"/>
    </svg>
  );
}

export default IconDown;