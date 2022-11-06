/**
 * @name: Test.jsx
 * @author: 米洛
 * @date: 2022-06-13 13:16
 * @description：用于组件测试的沙盒（试验田）
 */


import React, {useEffect, useRef, useState} from 'react';


function Test(props) {
  const officeRef = useRef()
  return (
    <div ref={officeRef}>

    </div>
  )
}

export default Test;