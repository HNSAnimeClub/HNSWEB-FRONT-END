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

  const [loading, setLoading] = useState(false)
  const [tableModel, setTableModel] = useState([])

  const getData = async () => {
    setLoading(true)
    const {data: {slideshow: {slides}}} = await axios.get(
      `https://echo.apifox.com/json`)
    slides.forEach((item) => item.task = item.title)
    setTableModel(slides)
    setLoading(false)
  }

  useEffect(() => {
    getData()
  }, [])

  //
  // 1. 发送请求
  // 2. 处理响应数据
  // 3. 刷新视图 setState()

  return (
    <div>
      <Todolist dataSource={tableModel} isLoading={loading}/>
    </div>
  )
}

export default Test;