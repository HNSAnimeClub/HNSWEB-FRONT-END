/**
 * @name: MiLuoExample.jsx
 * @author: 米洛
 * @date: 2022-07-10 15:25
 * @description：米洛组件
 */

import React, {useEffect, useRef, useState} from 'react';
import style from './miLuoExample.module.less'
import {Delete} from '@icon-park/react'
import {nanoid} from "nanoid";
import {Button} from "antd";
import axios from "axios";
import HNSLoading from "../../baseUI/hnsLoading/HNSLoading";


function MiLuoExample(props) {
  const [dataSource, setDataSource] = useState([])
  const [loading, setLoading] = useState(false)

  const getData = async () => {
    try {
      setLoading(true)
      const {data: {data}} = await axios.get(("/api/example/getList?userID=1264864614648"))
      setDataSource(data)
      setLoading(false)
    } catch (e) {
      console.log("出错了")
    }

  }


  useEffect(() => {
    getData()
  }, [])

  return (
    <div className={style.container}>
      <Todolist dataSource={dataSource} isLoading={loading}/>
    </div>
  )

}

// 2022-11-06
export function Todolist({dataSource, isLoading}) {

  const data = []
  const [list, setList] = useState(data)
  const [loading, setLoading] = useState(true)
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

  const Main = () => (
    <ul>
      <div className={style.toolBar}>
        <input onChange={getInput}/>
        <button onClick={submit} className={style.add}>新增任务</button>
      </div>
      {listRender()}
    </ul>
  )

  useEffect(() => {
    setList([...dataSource])
  }, [dataSource])

  useEffect(() => {
    setLoading(isLoading)
  }, [isLoading])

  return (
    <div className={style.container}>
      {loading ? <HNSLoading/> : <Main/>}
    </div>
  )
}

export default MiLuoExample;





