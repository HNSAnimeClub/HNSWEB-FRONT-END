/**
 * @name: Test.jsx
 * @author: 米洛
 * @date: 2022-06-13 13:16
 * @description：用于组件测试的沙盒（试验田）
 */

import React from 'react';
import style from './test.module.less'
import HNSCheckBox from "../baseUI/hnsCheckBox/HNSCheckBox";


function Test(props) {

  return (
    <div className={style.container}>
      <h1>hello</h1>
      <HNSCheckBox name={"checkBox"} className={style.checkBox} label={<span>我保证和大家<a>好好相处！</a></span>}/>
    </div>
  );
}

export default Test;
