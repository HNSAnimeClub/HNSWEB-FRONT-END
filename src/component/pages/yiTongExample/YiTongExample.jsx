/**
 * @name: YiTongExample.jsx
 * @author: 小柳
 * @date: 2022-07-03 15:54
 * @description：该文件的描述
 */

import React, {useState} from 'react'
import style from './yiTongExample.module.less'

function YiTongExample(){
    const [title,setTitle] = useState(0)

    const handleClick = () =>{
        setTitle(!title)
    }
 //   const styleChange = () =>{
 //       if(title)return style.title
 //       else return style.titlePrimary
 //   }
 //   const titleChange = () => {
 //     if (title) return <span>title为真</span>
 //   }
    return (
        <div>
            <h1 className={`${title ? style.title : style.titlePrimary}`}>{title ? "准备" : "开始！"}</h1>
            <button onClick={handleClick}>按钮点击变化</button>
            {title && <span>title为真</span>}
        </div>
    )
}
export default YiTongExample