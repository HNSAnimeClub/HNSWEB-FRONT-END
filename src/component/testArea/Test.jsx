/**
 * @name: Test.jsx
 * @author: 米洛
 * @date: 2022-06-13 13:16
 * @description：用于组件测试的沙盒（试验田）
 */

import React from 'react';
import style from './test.module.less'
import HNSToast from "../baseUI/hnsToast/HNSToast";
import HNSButton from "../baseUI/hnsButton/HNSButton";


function Test(props) {

  let messageNode = (
    <div className={style.test}>
      helloaaaaaaaaaaaaaaaaaaa
    </div>
  )
  const handleClick = () => {
    messageNode = 1
    HNSToast.message(messageNode)
  }
  return (
    <div className={style.container}>
      <HNSToast delay={2}/>
      <HNSButton onClick={handleClick}>按钮</HNSButton>
    </div>
  );
}

export default Test;
