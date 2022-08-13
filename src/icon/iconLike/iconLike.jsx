/**
 * @name: iconSearch.jsx
 * @author: 米洛
 * @date: 2022-06-27 19:43
 * @description：搜索图标
 */

import React from 'react';
import style from './iconLike.module.less'

function IconLike(props) {
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
        d="M27.6002 18.5998V11.3998C27.6002 8.41743 25.1826 5.99977 22.2002 5.99977L15.0002 22.1998V41.9998H35.9162C37.7113 42.0201 39.2471 40.7147 39.5162 38.9398L42.0002 22.7398C42.1587 21.6955 41.8506 20.6343 41.1576 19.8373C40.4645 19.0403 39.4564 18.5878 38.4002 18.5998H27.6002Z"/>
      <path
        d="M15 22.0001H10.194C8.08532 21.9628 6.2827 23.7095 6 25.7994V38.3994C6.2827 40.4894 8.08532 42.0367 10.194 41.9994H15V22.0001Z"/>
    </svg>

  );
}

export default IconLike;
