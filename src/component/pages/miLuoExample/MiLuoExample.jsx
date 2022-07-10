/**
 * @name: MiLuoExample.jsx
 * @author: 米洛
 * @date: 2022-07-10 15:25
 * @description：米洛组件
 */

import React, {useState} from 'react';
import style from './miLuoExample.module.less'


function MiLuoExample(props) {
  console.log(props)
  return (
    <div>
      <button className={props.type === "red" ? style.button1 : ""}>{props.children}</button>
    </div>

  );
}

export default MiLuoExample;