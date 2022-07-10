/**
 * @name: Test.jsx
 * @author: 米洛
 * @date: 2022-06-13 13:16
 * @description：用于组件测试的沙盒（试验田）
 */

import React, {useState} from 'react';
import style from './test.module.less'
import MiLuoExample from "../pages/miLuoExample/MiLuoExample";


function Test(props) {

  return (
    <div className={style.container}>
      <MiLuoExample type={"red"} color={"xxx"}>
        哈哈哈哈
      </MiLuoExample>
    </div>
  );
}

export default Test;
