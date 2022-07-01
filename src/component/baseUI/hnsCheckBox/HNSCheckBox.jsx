/**
 * @name: HNSCheckBox.jsx
 * @author: 米洛
 * @date: 2022-06-30 19:23
 * @description：选择框
 */

import React, {useEffect, useRef} from 'react';
import style from './hnsCheckBox.module.less'
import {nanoid} from "nanoid";

function HNSCheckBox(props) {
  let {label, name, className, onClick} = props
  if (!name) {
    throw new Error('请为HNSCheckBox指定唯一的name属性！')
  }
  className = className ? className : ""
  const checkBoxValue = nanoid()
  const checkBox = useRef(null)
  // 若选择框处于 HNSForm 组件内，应通知其变化
  const handleClick = () => {
    if (onClick) {
      onClick({[name]: checkBox.current?.checked, error: !(checkBox.current?.checked)})
    }
    HNSCheckBox.HNSCheckBox_value = {[name]: checkBox.current?.checked, error: !(checkBox.current?.checked)}
  }

  HNSCheckBox.HNSCheckBox_value = {[name]: checkBox.current?.checked, error: !(checkBox.current?.checked)}

  return (
    <div className={`${style.controller} ${className}`}>
      <input id={checkBoxValue} type={"checkbox"} ref={checkBox} onClick={handleClick}/>
      <label htmlFor={checkBoxValue}>{label}</label>
    </div>
  );
}

export default HNSCheckBox;