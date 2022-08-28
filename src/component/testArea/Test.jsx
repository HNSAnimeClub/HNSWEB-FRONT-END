/**
 * @name: Test.jsx
 * @author: 米洛
 * @date: 2022-06-13 13:16
 * @description：用于组件测试的沙盒（试验田）
 */


import React, {useState} from 'react';
import style from './test.module.less'
import HNSButton from "../baseUI/hnsButton/HNSButton";
import HNSNavigate from "../baseUI/hnsNavigate/HNSNavigate";
import HNSLoading from "../baseUI/hnsLoading/HNSLoading";


function Test(props) {
  const [loading,setLoading]=useState(false)
  return (
    <div className={style.container}>
      <HNSLoading fullScreen={false} isLoading={loading}/>
    </div>
  );
}

export default Test;
