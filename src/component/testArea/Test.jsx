/**
 * @name: Test.jsx
 * @author: 米洛
 * @date: 2022-06-13 13:16
 * @description：用于组件测试的沙盒（试验田）
 */

import React from 'react';
import HNSButton from "../baseUI/hnsButton/HNSButton";
import style from './test.module.less'

function Test(props) {
  const handleClick = () => {
    console.log(1)
  }
  return (
    <div className={style.container}>
      <HNSButton type={"primary"} onClick={handleClick}>HNSButton</HNSButton>
    </div>
  );
}

export default Test;
