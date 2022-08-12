/**
 * @name: iconSearch.jsx
 * @author: 米洛
 * @date: 2022-06-27 19:43
 * @description：搜索图标
 */

import React from 'react';
import style from './iconHeart.module.less'

function IconHeart(props) {
  let size = props.size ? props.size : "48"
  let className = props.className ? props.className : ""
  const handleClick = () => {
    if (props.onClick) {
      props.onClick()
    }
  }

  return (
    <svg className={`${style.icon} ${className}`} width={size} height={size} onClick={handleClick}>
      <path
        d="M15 8C8.92487 8 4 12.9249 4 19C4 30 17 40 24 42.3262C31 40 44 30 44 19C44 12.9249 39.0751 8 33 8C29.2797 8 25.9907 9.8469 24 12.6738C22.0093 9.8469 18.7203 8 15 8Z"
      />
    </svg>


  );
}

export default IconHeart;
