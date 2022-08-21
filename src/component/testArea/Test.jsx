/**
 * @name: Test.jsx
 * @author: 米洛
 * @date: 2022-06-13 13:16
 * @description：用于组件测试的沙盒（试验田）
 */


import React, {useState} from 'react';
import style from './test.module.less'
import HNSButton from "../baseUI/hnsButton/HNSButton";


function Test(props) {
  const handleClick = () => {
    console.log(1)
  }
  return (
    <div className={style.container}>
    </div>
  );
}

export default Test;
