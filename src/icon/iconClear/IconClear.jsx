/**
 * @name: IconClear.jsx
 * @author: 米洛
 * @date: 2022-06-20 02:06
 * @description：清除按钮 icon 组件
 */

import React from 'react';
import style from './iconClear.module.less'

function IconClear(props) {
  let size = props.size ? props.size : "36"
  let className = props.className ? props.className : ""

  const handleClick = (e) => {
    props.onClick(e)
  }

  return (
    <svg t="1655735994759" onClick={handleClick} width={size} height={size} className={`${style.clear} ${className}`}
         viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
         p-id="3139">
      <path
        d="M509.92 475.968l74.032-74.032a16 16 0 0 1 22.624 0l11.312 11.312a16 16 0 0 1 0 22.64L543.84 509.92l74.032 74.032a16 16 0 0 1 0 22.624l-11.312 11.312a16 16 0 0 1-22.624 0L509.92 543.84l-74.032 74.032a16 16 0 0 1-22.64 0l-11.312-11.312a16 16 0 0 1 0-22.624l74.032-74.032-74.032-74.032a16 16 0 0 1 0-22.64l11.312-11.312a16 16 0 0 1 22.64 0l74.032 74.032z m0 319.856c157.904 0 285.92-128 285.92-285.92C795.84 352 667.808 224 509.92 224 352 224 224 352 224 509.92c0 157.904 128 285.92 285.92 285.92z m0 48C325.504 843.84 176 694.336 176 509.92 176 325.52 325.504 176 509.92 176c184.416 0 333.92 149.504 333.92 333.92 0 184.416-149.504 333.92-333.92 333.92z"
        p-id="3140"/>
    </svg>);
}

export default IconClear;
