/**
 * @name: HNSAvatar.jsx
 * @author: 米洛
 * @date: 2022-06-27 15:30
 * @description：头像组件
 */


import React from 'react';
import style from './hnsAvatar.module.less'

function HNSAvatar(props) {
  let {type, src, size, className,onClick} = props
  size = size ? size : 32
  className = className ? className : ""
  // 默认为圆形头像
  const typeJudge = () => {
    if (type) return style[type]
    else return style.circle
  }
  const handleClick = () => {
    onClick()
  }
  return (
    <img src={src} className={`${typeJudge()} ${className}`} height={size} width={size} alt={"hnsAvatar"} onClick={handleClick}/>
  );
}

export default HNSAvatar;