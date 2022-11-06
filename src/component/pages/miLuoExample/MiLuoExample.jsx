/**
 * @name: MiLuoExample.jsx
 * @author: 米洛
 * @date: 2022-07-10 15:25
 * @description：米洛组件
 */

import React, {useEffect, useRef, useState} from 'react';
import style from './miLuoExample.module.less'
import {Delete} from '@icon-park/react'
import HNSButton from "../../baseUI/hnsButton/HNSButton";
import {nanoid} from "nanoid";

function MiLuoExample(props) {
  const data = [{task: "默认任务1"}, {task: "默认任务2"}, {task: "默认任务3"}, {task: "默认任务4"}]
  const [list, setList] = useState(data)
  const inputRef = useRef()

  // 删除元素
  const deleteItem = (targetIndex) => {
    setList(list.filter((_, index) => index !== targetIndex))
  }

  // 获取输入
  const getInput = ({target: {value}}) => {
    inputRef.current = value
  }

  // 新增任务
  const submit = () => {
    if (!inputRef.current) return
    setList([{task: inputRef.current}, ...list])
  }

  const listRender = () => list.map(({task}, index) =>
    (
      <li key={nanoid()}>
        <span>{task}</span>
        <button className={style.delete} onClick={() => deleteItem(index)}>
          <Delete fill={"#fff"}/>
        </button>

      </li>
    ))


  return (
    <div className={style.container}>
      <ul>
        <div className={style.toolBar}>
          <input onChange={getInput}/>
          <button onClick={submit}>新增任务</button>
        </div>
        {listRender()}
      </ul>
    </div>
  )

}

export default MiLuoExample;



