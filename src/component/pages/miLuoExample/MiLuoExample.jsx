/**
 * @name: MiLuoExample.jsx
 * @author: 米洛
 * @date: 2022-07-10 15:25
 * @description：米洛组件
 */

import React, {useRef, useState} from 'react';
import style from './miLuoExample.module.less'
import {nanoid} from "nanoid";


function MiLuoExample(props) {
  const data = [
    {name: "哈喽1"},
    {name: "哈喽2"},
    {name: "哈喽3"},
  ]

  const container = useRef()
  const [target, setTarget] = useState(null)

  const styleChange = (index) => {
    setTarget(index)
  }

  return (
    <div ref={container}>
      {
        data.map((item, index) => {
          return (
            <div className={`${style.item} ${index === target ? style.itemActive : ""}`}
                 key={nanoid()}
                 onClick={event => styleChange(index)}>{item.name}
            </div>
          )
        })
      }
    </div>

  );
}

export default MiLuoExample;

