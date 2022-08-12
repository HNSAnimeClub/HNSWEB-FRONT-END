/**
 * @name: MiLuoExample.jsx
 * @author: 米洛
 * @date: 2022-07-10 15:25
 * @description：米洛组件
 */

import React, {useState} from 'react';
import style from './miLuoExample.module.less'
import {nanoid} from "nanoid";


function MiLuoExample(props) {
  const [stack, setStack] = useState([
    {
      content: "123"
    }, {
      content: "456"
    }, {
      content: "789"
    },
  ])
  const [targetIndex, setTargetIndex] = useState([])

  const switchItem = () => {
    let preIndex = targetIndex[0]
    let lastIndex = targetIndex[1];
    [stack[preIndex], stack[lastIndex]] = [stack[lastIndex], stack[preIndex]]
    // setStack([...stack])
    setStack([...stack])
  }

  const saveIndex = (index) => {
    if (targetIndex.length < 3)
      targetIndex.push(index)
  }

  return (
    <div>
      <ul>
        {
          stack.map((item, index) => {
            return (
              <li key={nanoid()} onClick={event => saveIndex(index)}>{item.content}</li>
            )
          })
        }
      </ul>
      <button onClick={switchItem}>交换</button>
    </div>

  );
}

export default MiLuoExample;

