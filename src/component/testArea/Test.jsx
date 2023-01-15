/**
 * @name: Test.jsx
 * @author: 米洛
 * @date: 2022-06-13 13:16
 * @description：用于组件测试的沙盒（试验田）
 */


import React, {useEffect, useRef, useState} from 'react';
import {Todolist} from "../pages/miLuoExample/MiLuoExample";
import axios from "axios";


function Test(props) {
  // 你要做的几件事
  // 1. 发送请求
  // 2. 处理响应数据
  // 3. 刷新视图 setState()

  const [loading, setLoading] = useState(false)
  const [tableModel, setTableModel] = useState([])
  const getData = async () => {
    // 加载
    setLoading(true)
    // 发请求
    const {data: {slideshow: {slides}}} = await axios.get(
      `https://echo.apifox.com/json`)
    // 处理数据，给数据源一个不存在的task字段，以便于展示
    slides.forEach((item) => item.task = item.title)
    // 更新数据
    setTableModel(slides)
    // 把加载关了
    setLoading(false)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <Todolist dataSource={tableModel} isLoading={loading}/>
    </div>
  )
}

export default Test;