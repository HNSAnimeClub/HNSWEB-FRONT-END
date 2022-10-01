/**
 * @name: Test.jsx
 * @author: 米洛
 * @date: 2022-06-13 13:16
 * @description：用于组件测试的沙盒（试验田）
 */


import React, {useEffect, useRef, useState} from 'react';
import style from './test.module.less'
import {nanoid} from "nanoid";
import HNSButton from "../baseUI/hnsButton/HNSButton";
import {Button} from "antd";
import Input from "antd/es/input/Input";
import axios from "axios";

function Test(props) {
  useEffect(() => {
    axios.get("/api/public/img/0ZUJjFY5OUcVvhUgG9p2J.jpg",{
    }).then(res => res, err => err)
  }, [])
  return (
    <div className={style.container}>

    </div>
  )
}

export default Test;