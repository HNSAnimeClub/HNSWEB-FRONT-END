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
    if (firstInput) return
    if (!require && !errorMessage) return
    if ((require && errorMessage && (!input.current.value || emptyReg.test(input.current.value)))
      || (require && !errorMessage && (!input.current.value || emptyReg.test(input.current.value)))) {
      return (<span className={style.errorMessage}>{label}不能为空</span>)
    }
    // 这两行需要重点关注，有可能在某种特定情况下翻车
    if ((require && errorMessage && input.current.value) || (!require && errorMessage)) {
      if (!(checkTypeReg && checkTypeReg.test(input.current.value))) {
        return (<span className={style.errorMessage}>{errorMessage}</span>)
      }
    }
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
    if (label) {
      if (!type) {
        return (
          <div className={style.layOutControl}>
            <span className={style.label}>{label}</span>
            <div
              className={`${style.container} ${errorFocus()} ${checkError() ? style.error : ""}`}
              onFocus={handleFocus} onBlur={handleBlur}>
              <input onChange={handleOnChange} className={`${style.base} ${style.text} `}
                     ref={input} maxLength={maxLength} placeholder={placeHolder ? placeHolder : ""}/>
              {renderPlainText()}
              {maxLength ? <span className={style.maxLength}>
              <span className={maxLengthError()}>{contentLength}</span>/{maxLength}</span> : ""}
              <IconClear onClick={clear} width={iconSize} height={iconSize}/>
            </div>
            {checkError()}
          </div>)
      } else {
        return (
          <div className={style.layOutControl}>
            <span className={style.label}>{label}</span>
            <div
              className={`${style.container} ${errorFocus()} ${checkError() ? style.error : ""}`}
              onFocus={handleFocus} onBlur={handleBlur}>
              <input onChange={handleOnChange} className={`${style.base} ${style[type]} `}
                     type={type} ref={input} maxLength={maxLength} placeholder={placeHolder ? placeHolder : ""}/>
              {renderPlainText()}
              {maxLength ? <span className={style.maxLength}>
              <span className={maxLengthError()}>{contentLength}</span>/{maxLength}</span> : ""}
              <IconClear onClick={clear} width={iconSize} height={iconSize}/>
            </div>
            {checkError()}
          </div>)
      }
    } else {
      if (type) {
        return (
          <div className={style.layOutControl}>
            <div
              className={`${style.container} ${errorFocus()} ${checkError() ? style.error : ""}`}
              onFocus={handleFocus} onBlur={handleBlur}>
              <input onChange={handleOnChange} className={`${style.base} ${style[type]}`}
                     type={type} ref={input} maxLength={maxLength} placeholder={placeHolder ? placeHolder : ""}/>
              {renderPlainText()}
              {maxLength ? <span className={style.maxLength}>
              <span className={maxLengthError()}>{contentLength}</span>/{maxLength}</span> : ""}
              <IconClear onClick={clear} width={iconSize} height={iconSize}/>
            </div>
            {checkError()}
          </div>)
      } else {
        return (
          <div className={style.layOutControl}>
            <div
              className={`${style.container} ${errorFocus()} ${checkError() ? style.error : ""}`}
              onFocus={handleFocus} onBlur={handleBlur}>
              <input onChange={handleOnChange} className={`${style.base} ${style.text} `}
                     ref={input} maxLength={maxLength} placeholder={placeHolder ? placeHolder : ""}/>
              {renderPlainText()}
              {maxLength ? <span className={style.maxLength}>
              <span className={maxLengthError()}>{contentLength}</span>/{maxLength}</span> : ""}
              <IconClear onClick={clear} width={iconSize} height={iconSize}/>
            </div>
            {checkError()}
          </div>)
      }

    }
  }

  return (
    <>
      {renderComponent()}
    </>
  )

}

export default HNSInput;