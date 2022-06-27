/**
 * @name: HNSSearch.jsx
 * @author: 米洛
 * @date: 2022-06-27 17:26
 * @description：该文件的描述
 */

import React from 'react';
import style from './hnsSearch.module.less'
import IconSearch from "../../../icon/iconSearch/iconSearch";

function HNSSearch(props) {
  let value = {}
  const handleChange = (e) => {
    value = {value: e.target.value}
  }
  const onFinished = () => {
    if (props.onFinished) {
      props.onFinished(value)
    }
  }
  return (
    <div className={style.controller}>
      <input type={"search"} onChange={handleChange}/>
      <button className={style.searchBtn} onClick={onFinished}>
        <IconSearch size={28}/>
      </button>
    </div>
  );
}

export default HNSSearch;