/**
 * @name: Test.jsx
 * @author: 米洛
 * @date: 2022-06-13 13:16
 * @description：用于组件测试的沙盒（试验田）
 */
<<<<<<< HEAD

import React, {useState} from 'react';
=======
import React from 'react';
>>>>>>> e76df3c (feat:新增)
import style from './test.module.less'
import MiLuoExample from "../pages/miLuoExample/MiLuoExample";


function Test(props) {

<<<<<<< HEAD
  return (
    <div className={style.container}>
      <MiLuoExample type={"red"} color={"xxx"}>
        哈哈哈哈
      </MiLuoExample>
    </div>
  );
=======
    let messageNode = (
        <div className={style.test}>
            helloaaaaaaaaaaaaaaaaaaa
        </div>
    )
    const handleClick = () => {
        messageNode =1
        HNSToast.message(messageNode)
    }
    return (
        <div className={style.container}>
            <HNSToast delay={2}/>
            <HNSButton onClick={handleClick}></HNSButton>
        </div>
    );
>>>>>>> e76df3c (feat:新增)
}

export default Test;

