/**
 * @name: HNSButton
 * @author: 米洛
 * @date: 2022-06-13 12:57
 * @description：button按钮
 */

import React from 'react';
import style from './hnsButton.module.less'

function HNSButton(props) {

  return (
    <button className={`${style.HNSButton} ${props.type ? style[props.type] : style["default"]}`}>
      {props.children}
    </button>
  );
}

export default HNSButton;
