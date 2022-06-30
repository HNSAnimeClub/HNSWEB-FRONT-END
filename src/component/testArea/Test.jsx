/**
 * @name: Test.jsx
 * @author: 米洛
 * @date: 2022-06-13 13:16
 * @description：用于组件测试的沙盒（试验田）
 */

import React from 'react';
import style from './test.module.less'
import HNSSearch from "../baseUI/hnsSearch/HNSSearch";


function Test(props) {
  const onFinished = (result) => {
    console.log(result)
  }

  return (
    <div className={style.container}>
      <HNSSearch onFinished={onFinished}/>
    </div>
  );
}

export default Test;
