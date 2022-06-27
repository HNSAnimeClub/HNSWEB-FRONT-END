/**
 * @name: iconSearch.jsx
 * @author: 米洛
 * @date: 2022-06-27 19:43
 * @description：搜索图标
 */

import React from 'react';
import style from './iconSearch.module.less'

function IconSearch(props) {
  let size = props.size ? props.size : "36"

  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"
         className={style.icon}>
      <path
        d="M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z"
        stroke="#FFF" strokeWidth="4" strokeLinejoin="round"/>
      <path
        d="M26.6568 14.3431C25.2091 12.8954 23.2091 12 21 12C18.7909 12 16.7909 12.8954 15.3431 14.3431"
        stroke="#FFF"
        strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <path
        d="M33.2218 33.2218L41.7071 41.7071" stroke="#FFF" strokeWidth="4" strokeLinecap="round"
        strokeLinejoin="round"/>
    </svg>

  );
}

export default IconSearch;
