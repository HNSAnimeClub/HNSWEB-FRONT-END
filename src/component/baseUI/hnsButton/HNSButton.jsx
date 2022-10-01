/**
 * @name: HNSButton
 * @author: 米洛
 * @date: 2022-06-13 12:57
 * @description：button按钮
 */

import React, {useState} from 'react';
import style from './hnsButton.module.less'

function HNSButton(props) {

  let {changeStyle, className} = props
  className = className ? className : ""
  const [state, setState] = useState(0)
  const handleClick = (e) => {
    if (props.onClick) {
      props.onClick(e)
      setState(1)
    }
  }
  // handleAnime 函数目前可有可无，作用是动画结束时将 clickActive 类名清除，
  // 即使没有这个函数功能也是正常的
  const handleAnime = () => {
    setState(0)
  }

  return (
    <button
      className={`${style.HNSButton} 
      ${props.type ? style[props.type] : style["default"]} ${state ? style["clickActive"] : ""} ${className}`}
      style={changeStyle}
      onClick={handleClick}
      onAnimationEnd={handleAnime}
      disabled={props.disabled}
      {...props}
    >
      {props.children}
    </button>
  );
}

export default HNSButton;
