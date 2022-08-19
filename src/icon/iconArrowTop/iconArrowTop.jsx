/**
 * @name: iconArrowTop
 * @author: 米洛
 * @date: 2022-08-19 21:54
 * @description：该文件的描述
 */

import React from 'react';
import style from './iconArrowTop.module.less'

function IconArrowTop(props) {
  let size = props.size ? props.size : "48"
  let className = props.className ? props.className : ""
  const handleClick = () => {
    if (props.onClick) {
      props.onClick()
    }
  }
  return (
    <svg className={`${style.icon} ${className}`} width={size} height={size} onClick={handleClick}>
      <path d="M24.0083 12.1006V36.0001"/>
      <path d="M12 24L24 12L36 24"/>
    </svg>
  );
}


export default IconArrowTop;
