/**
 * @name: IconStar.jsx
 * @author: 米洛
 * @date: 2022-07-30 21:11
 * @description：该文件的描述
 */

import React from 'react';
import style from './iconStar.module.less'

function IconStar(props) {
  let className = props.className ? props.className : ""
  let size = props.size ? props.size : "36"

  const handleClick = (e) => {
    if (props.onClick)
      props.onClick(e)
  }
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"
         className={`${style.icon} ${className}`} onClick={handleClick}>
      <path
        d="M23.9986 5L17.8856 17.4776L4 19.4911L14.0589 29.3251L11.6544 43L23.9986 36.4192L36.3454 43L33.9586 29.3251L44 19.4911L30.1913 17.4776L23.9986 5Z"/>
    </svg>
  );
}

export default IconStar;