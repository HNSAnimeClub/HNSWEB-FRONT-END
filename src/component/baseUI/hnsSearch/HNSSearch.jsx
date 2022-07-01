/**
 * @name: HNSSearch.jsx
 * @author: 米洛
 * @date: 2022-06-27 17:26
 * @description：该文件的描述
 */

import React, {useRef, useState} from 'react';
import style from './hnsSearch.module.less'
import IconSearch from "../../../icon/iconSearch/iconSearch";
import IconClear from "../../../icon/iconClear/IconClear";

function HNSSearch(props) {
  let {className} = props
  const input = useRef(null)
  const [focus, setFocus] = useState(false)
  const [value, setValue] = useState("")
  const handleChange = (e) => {
    setValue(e.target.value)
  }
  const clear = () => {
    input.current.value = ""
    input.current.focus()
    setValue("")
  }
  const handleFocus = () => {
    setFocus(true)
  }
  const handleBlur = () => {
    setFocus(false)
  }
  const handleActive = () => {
    if (focus) return style.controllerActive
    else return style.controller
  }
  const iconActive = () => {
    if (focus) return style.iconActive
  }

  const onFinished = (e) => {
    if (props.onFinished || e.key === "Enter") {
      props.onFinished({value})
    }
  }

  return (
    <div className={`${style.controller} ${className} ${handleActive()}`} onFocus={handleFocus} onBlur={handleBlur}>
      <IconSearch size={24} className={`${style.icon} ${iconActive()}`} onClick={onFinished}/>
      <input type={"search"} onChange={handleChange} ref={input} onKeyPress={onFinished}/>
      {value && <IconClear onClick={clear} size={31}/>}
    </div>
  );
}

export default HNSSearch;