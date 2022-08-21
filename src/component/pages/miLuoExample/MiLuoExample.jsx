/**
 * @name: MiLuoExample.jsx
 * @author: 米洛
 * @date: 2022-07-10 15:25
 * @description：米洛组件
 */

import React, {useRef, useState} from 'react';
import style from './miLuoExample.module.less'
import IconArrowTop from "../../../icon/iconArrowTop/iconArrowTop";
import {debounce} from "../../../utils/hnsDebounce";

function MiLuoExample(props) {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
  const [show, setShow] = useState(false)
  window.onscroll = () => {
    debounce(() => {
      if (window.scrollY > window.innerHeight / 3)
        setShow(true)
      else
        setShow(false)
    }, 200)
  }


  return (
    <div>
      <p>我是顶部</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <div className={`${style.main} ${show ? style.show : ""}`} onClick={handleClick}>
        <IconArrowTop/>
      </div>
    </div>
  );
}

export default MiLuoExample;

