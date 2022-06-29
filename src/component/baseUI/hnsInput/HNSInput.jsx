/**
 * @name: HNSInput
 * @author: 米洛
 * @date: 2022-06-19 22:53
 * @description：HNS 输入框
 */

import React, {useRef, useState} from 'react';
import style from './hnsInput.module.less'
import IconClear from "../../../icon/iconClear/IconClear";
import IconEyeOpen from "../../../icon/iconEyeOpen/IconEyeOpen";
import IconEyeClose from "../../../icon/iconEyeClose/IconEyeClose";

function HNSInput(props) {
  const {label, iconSize, maxLength, errorMessage, require, checkTypeReg, name, placeHolder} = props
  const [type, setType] = useState(props.type)
  const [plainText, setPlainText] = useState(false)
  const [firstInput, setFirstInput] = useState(true)
  const [contentLength, setContentLength] = useState(0)
  const [focus, setFocus] = useState(false)
  const input = useRef(null)
  // 匹配一个或多个空格
  const emptyReg = /(^\s+)|(\s+$)|\s+/g;
  let error = false


  // 输入框变化的回调
  const handleOnChange = () => {
    error = !!checkError();
    if (props.result) {
      props.result({[name]: input.current.value, error})
    }
    HNSInput.HNSInput_value = {[name]: input.current.value, error}
    setFirstInput(false)
    setContentLength(input.current.value.length)
  }

  // 输入框聚焦（选中状态）
  const handleFocus = () => {
    setFocus(true)
  }

  // 输入框失焦
  const handleBlur = () => {
    setFocus(false)
  }

  // 错误时，输入框聚焦失焦的样式
  const errorFocus = () => {
    if (focus) {
      if (checkError()) {
        return style.error
      } else return style.containerActive
    } else {
      if (checkError()) {
        return style.error
      } else return ""
    }
  }

  // 清除输入框内容
  const clear = () => {
    input.current.value = ""
    input.current.focus()
    setFocus(true)
    setContentLength(0)
    if (checkError())
      HNSInput.HNSInput_value = {[name]: input.current.value, error: true}
  }

  // 校验组件的渲染函数
  const checkError = () => {
    let value = input.current?.value
    if (firstInput) return
    if (!require && !errorMessage) return
    if (emptyReg.test(value))
      return (<span className={style.errorMessage}>{label}不能包含空格</span>)
    if (require && (errorMessage || !errorMessage) && !value)
      return (<span className={style.errorMessage}>{label}不能为空</span>)
    if ((require || !require) && errorMessage && !checkTypeReg.test(value))
      return (<span className={style.errorMessage}>{errorMessage}</span>)
  }

  // 密码明文，密文切换
  const switchPlainText = () => {
    setPlainText(!plainText)
    if (props.type.toLowerCase() === "password") {
      if (plainText) {
        setType("password")
      } else {
        setType("text")
      }
    }
  }

  // 密码明文，密文图标切换渲染
  const renderPlainText = () => {
    if (props.type && props.type.toLowerCase() === "password") {
      if (plainText) {
        return <IconEyeOpen onClick={switchPlainText} width={iconSize} height={iconSize}/>
      } else {
        return <IconEyeClose onClick={switchPlainText} width={iconSize} height={iconSize}/>
      }
    }
  }

  // 超出字数限制，文本变红
  const maxLengthError = () => {
    if (input.current?.value.length === maxLength) {
      return style.maxLengthError
    } else return ""
  }

  // 主要组件渲染函数
  const renderComponent = () => {
    return (
      <div className={style.layOutControl}>
        {label && <span className={style.label}>{label}</span>}
        <div
          className={`${style.container} ${errorFocus()} ${checkError() ? style.error : ""}`}
          onFocus={handleFocus} onBlur={handleBlur}>
          <input onChange={handleOnChange} className={`${style.base}`}
                 ref={input} maxLength={maxLength} placeholder={placeHolder ? placeHolder : ""} type={type}/>
          {renderPlainText()}
          {maxLength ? <span className={style.maxLength}>
              <span className={maxLengthError()}>{contentLength}</span>/{maxLength}</span> : ""}
          <IconClear onClick={clear} width={iconSize} height={iconSize}/>
        </div>
        {checkError()}
      </div>
    )
  }

  return (
    <>
      {renderComponent()}
    </>
  )

}

export default HNSInput;