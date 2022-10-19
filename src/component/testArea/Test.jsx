/**
 * @name: Test.jsx
 * @author: 米洛
 * @date: 2022-06-13 13:16
 * @description：用于组件测试的沙盒（试验田）
 */


import React, {useEffect, useRef, useState} from 'react';
import {nanoid} from "nanoid";


function Test(props) {
  const data = [{label: "选项1"}, {label: "选项2"}, {label: "选项3"}]

  const [state, setState] = useState(Array(data.length).fill(false))

  const handleClick = (index) => {

    state[index] = !state[index]
    setState([...state])
  }

  const allSelect = () => {
    if (state.every(item => item === true)) {
      setState([...state.fill(false)])
    } else {
      setState([...state.fill(true)])
    }
  }

  useEffect(() => {
    console.log(state)
  }, [state])


  return (
    <div>
      <label key={nanoid()}>
        全选
        <input type={"checkbox"} onChange={allSelect} checked={state.every(item => item === true)}/>
      </label>

      {
        data.map((item, index) => (
          <label key={nanoid()}>
            {item.label}
            <input type={"checkbox"} checked={state[index]} onChange={() => handleClick(index)}/>
          </label>
        ))
      }
    </div>
  )
}

export default Test;