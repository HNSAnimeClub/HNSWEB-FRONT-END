/**
 * @name: Test.jsx
 * @author: 米洛
 * @date: 2022-06-13 13:16
 * @description：用于组件测试的沙盒（试验田）
 */


import React, {useEffect, useRef, useState} from 'react';
import {Todolist} from "../pages/miLuoExample/MiLuoExample";


function Test(props) {
  const obj = {
    username: "米洛",
    id: 114514
  }
  //  localStorage
  useEffect(()=>{
    sessionStorage.setItem("userInfo",JSON.stringify(obj))
    // const json="{\"url\": \"https://echo.apifox.com/stream/5\", \"args\": {}}"
  },[])

  return (
    <div>
      <Todolist dataSource={[]} isLoading={false}/>
    </div>
  )
}

export default Test;