/**
 * @name: IconClose.jsx
 * @author: 米洛
 * @date: 2022-07-03 23:06
 * @description：关闭图标
 */

import React from 'react';
import style from "./iconClose.module.less"

function IconClose(props) {
  let size = props.size ? props.size : "36"
  let className = props.className ? props.className : ""

  const handleClick = (e) => {
    props.onClick(e)
  }
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"
         onClick={handleClick} width={size} height={size} className={`${style.icon} ${className}`}>
      <path d="M8 8L40 40"  strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 40L40 8"  strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
    ;
}

export default IconClose;