/**
 * @name: HNSModel.jsx
 * @author: 米洛
 * @date: 2022-07-03 20:00
 * @description：弹出框
 */

import React, {useRef} from 'react';
import style from './hnsModel.module.less'
import IconClose from "../../../icon/iconClose/IconClose";

function HNSModel(props) {
  let {visible, toolBar, width, height, children, title} = props
  const controller = useRef(null)
  width = width ? width : ""
  height = height ? height : ""

  const handleClose = () => {
    if (props.modelClose)
      props.modelClose()
  }

  // 点击蒙版区域也能关闭弹窗
  const clickMaskToClose = (e) => {
    if (e.target === controller.current)
      handleClose()
  }

  return (
    <div className={visible ? style.controllerActive : style.controllerClose} ref={controller}
         onClick={clickMaskToClose}>
      <div className={style.main} style={{width, height}}>
        <div className={style.titleController} style={{borderBottom: title ? "" : "none"}}>
          {title && <span className={style.title}>{title}</span>}
          <IconClose className={style.iconClose} size={18} onClick={handleClose}/>
        </div>
        {children}
        {toolBar && <div className={style.toolBar}>{toolBar}</div>}
      </div>
    </div>

  );
}

export default HNSModel;