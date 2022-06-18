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
  return (
    <div className={style.container}>
      <HNSButton type="default" color={"#faad14"}>HNSButton</HNSButton>
    </div>
  );
}

export default Test;