/**
 * @name: iconSearch.jsx
 * @author: 米洛
 * @date: 2022-06-27 19:43
 * @description：搜索图标
 */

import React from 'react';
import style from './iconBase.module.less'

function IconBase(props) {
  let size = props.size ? props.size : "32"
  let className = props.className ? props.className : ""
  const handleClick = () => {
    if (props.onClick) {
      props.onClick()
    }
  }

  return (
    <svg className={`${style.icon} ${className}`} width={size} height={size} onClick={handleClick}>
      {props.children}
    </svg>

  );
}

export default IconBase;
