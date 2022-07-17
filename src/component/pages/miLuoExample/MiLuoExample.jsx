/**
 * @name: MiLuoExample.jsx
 * @author: 米洛
 * @date: 2022-07-10 15:25
 * @description：米洛组件
 */

import React, {useState} from 'react';
import style from './miLuoExample.module.less'


function MiLuoExample(props) {

  // const handleChange = (e) => {
  //   props.result(e.target.value)
  // }
  const handleChange = (e) => {
    props.result(e.target.value)
  }
  return (
    <div>
      <input onChange={handleChange}/>
    </div>

  );
}

export default MiLuoExample;