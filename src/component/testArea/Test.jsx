/**
 * @name: Test.jsx
 * @author: 米洛
 * @date: 2022-06-13 13:16
 * @description：用于组件测试的沙盒（试验田）
 */

import React from 'react';
import HNSInput from "../baseUI/hnsInput/HNSInput";
import style from './test.module.less'


function Test(props) {
  const handleChange = (e) => {
    console.log(e.target.value)
  }
  return (
    <div className={style.container}>
      <HNSInput iconSize={48} onChange={handleChange}
                label={"密码"}
                maxLength={12}
                require={true}
                type={"password"}
                checkTypeReg={/^[a-zA-Z0-9_]+$/}
                errorMessage={"密码仅可包含a-z,0-9,下划线"}
      />
    </div>
  );
}

export default Test;
