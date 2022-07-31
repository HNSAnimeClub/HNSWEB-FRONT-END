/**
 * @name: Test.jsx
 * @author: 米洛
 * @date: 2022-06-13 13:16
 * @description：用于组件测试的沙盒（试验田）
 */

import React from 'react';
import style from './test.module.less'
import HNSRate from "../baseUI/hnsRate/HNSRate";


function Test(props) {

  return (
    <div className={style.container}>
      <HNSRate defaultRate={4}/>
    </div>
  );
}

export default Test;
