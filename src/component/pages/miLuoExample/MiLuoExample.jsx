/**
 * @name: MiLuoExample.jsx
 * @author: 米洛
 * @date: 2022-07-10 15:25
 * @description：米洛组件
 */

import React, {useEffect, useMemo, useRef, useState} from 'react';
import style from './miLuoExample.module.less'
import {Delete, Me} from '@icon-park/react'
import {nanoid} from "nanoid";
import {Button, Table} from "antd";
import axios from "axios";
import HNSLoading from "../../baseUI/hnsLoading/HNSLoading";
import dayjs from "dayjs"


function MiLuoExample(props) {
  return (
    <div className={style.container}>
      <GitList/>
    </div>
  )

}

// 2023-1-04
export function GitList() {
  console.log("子组件")
  const [model, setModel] = useState([])
  const [loading, setLoading] = useState(false)
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  })
  const columns = [
    {
      title: "序号",
      dataIndex: "index",
      key: "index",
      align: "center",
      render: (text, record, index) => (pagination.pageSize * (pagination.current - 1)) + index + 1
    },
    {
      title: "",
      dataIndex: "avatar_url",
      key: "avatar_url",
      align: "center",
      render: (text) => <img src={text} alt={"头像"} className={style.avatar}/>
    },
    {title: "用户名", dataIndex: "login", key: "login", align: "center"},
    {title: "id", dataIndex: "node_id", key: "node_id", align: "center"},
    {
      title: "是否为管理员",
      dataIndex: "site_admin",
      key: "site_admin",
      align: "center",
      render: (text) => text ? "是" : "否"
    },
    {
      title: "个人主页",
      dataIndex: "html_url",
      key: "html_url",
      align: "center",
      render: (text) => (
        <a onClick={() => window.open(text)} className={style.spaceLink}>
          <Me/>
          查看个人主页
        </a>
      )
    },
  ]
  const getData = async () => {
    setLoading(true)
    const {data} = await axios.get(`https://api.github.com/users?per_page=${50}`)
    setModel(data)
    setPagination({...pagination, total: data.length})
    setLoading(false)
  }
  const pageChange = (pagination) => {
    setPagination({...pagination})
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className={style.container}>
      <Table
        className={style.table}
        dataSource={model}
        columns={columns}
        loading={loading}
        onChange={(current) => pageChange(current)}
        rowKey={() => nanoid()}
        pagination={{
          position: ["bottomCenter"],
          showSizeChanger: true,
          pageSizeOptions: [10, 20, 30, 50],
          ...pagination
        }}/>
    </div>
  )
}

// 2022-11-06
export function Todolist({dataSource, isLoading}) {

  const data = []
  const [list, setList] = useState(data)
  const [loading, setLoading] = useState(true)
  const inputRef = useRef()
  // 删除元素
  const deleteItem = (targetIndex) => {
    setList(list.filter((_, index) => index !== targetIndex))
  }

  // 获取输入
  const getInput = ({target: {value}}) => {
    inputRef.current = value
  }

  // 新增任务
  const submit = () => {
    if (!inputRef.current) return
    setList([{task: inputRef.current}, ...list])
  }

  const listRender = () => list.map(({task}, index) =>
    (
      <li key={nanoid()}>
        <span>{task}</span>
        <button className={style.delete} onClick={() => deleteItem(index)}>
          <Delete fill={"#fff"}/>
        </button>

      </li>
    ))

  const Main = () => (
    <ul>
      <div className={style.toolBar}>
        <input onChange={getInput}/>
        <button onClick={submit} className={style.add}>新增任务</button>
      </div>
      {listRender()}
    </ul>
  )

  useEffect(() => {
    setList([...dataSource])
  }, [dataSource])

  useEffect(() => {
    setLoading(isLoading)
  }, [isLoading])

  return (
    <div className={style.container}>
      {loading ? <HNSLoading/> : <Main/>}
    </div>
  )
}

export default MiLuoExample;





