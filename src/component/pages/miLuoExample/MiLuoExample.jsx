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
  const tag = ["热门", "番剧", "游戏"]
  // 点击元素的索引
  const [target, setTarget] = useState(0)
  const handleClick = (index) => {
    setTarget(index)
  }

  return (
    <div className={style.container}>
      {
        tag.map((item, index) => {
          return (
            <button className={`${style.button} ${target === index ? style.isActive : ""}`}
                    onClick={event => handleClick(index)}
                    key={nanoid()}>{tag[index]}</button>
          )
        })
      }
    </div>
  );
}

export default MiLuoExample;

