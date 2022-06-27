/**
 * @name: Test.jsx
 * @author: 米洛
 * @date: 2022-06-13 13:16
 * @description：用于组件测试的沙盒（试验田）
 */

import React, {useState} from 'react';
import HNSInput from "../baseUI/hnsInput/HNSInput";
import style from './test.module.less'
import HNSForm from "../baseUI/hnsForm/HNSForm";
import HNSButton from "../baseUI/hnsButton/HNSButton";


function Test(props) {
  const [canSubmit, setSubmit] = useState(false)
  const [data, setData] = useState(null)
  const onFinished = (result) => {
    console.log(result)
    setSubmit(!result.error)
    setData(result)
    console.log(data)
  }
  return (
    <div className={style.container}>
      <HNSForm onFinished={onFinished}>
        <HNSInput iconSize={48}
                  label={"用户名"}
                  name={"userName"}
                  maxLength={12}
                  require={false}
                  type={"text"}
                  checkTypeReg={/^[a-zA-Z0-9_]+$/}
                  errorMessage={"用户名仅可包含a-z,0-9,下划线"}
        />
        <HNSInput iconSize={48}
                  label={"密码"}
                  name={"password"}
                  maxLength={12}
                  require={false}
                  type={"password"}
                  checkTypeReg={/^[a-zA-Z0-9_]+$/}
                  errorMessage={"密码仅可包含a-z,0-9,下划线"}
        />
      </HNSForm>
      <HNSButton disabled={!canSubmit} type={"primary"}>{canSubmit ? "提交" : "禁止"}</HNSButton>
    </div>
  );
}

export default Test;
