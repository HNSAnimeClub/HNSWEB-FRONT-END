/**
 * @name: iconUp.jsx
 * @author: 米洛
 * @date: 2022-07-20 21:28
 * @description：该文件的描述
 */

import React from 'react';
import style from './iconUp.module.less'

function IconUp(props) {
  return (
    <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"
         className={style.icon}>
      <path d="M13 30L25 18L37 30"/>
    </svg>
  );
}

export default IconUp;