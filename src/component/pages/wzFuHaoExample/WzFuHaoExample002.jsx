/**
 * @name: WzFuHaoExample
 * @author: WzFuHao
 * @date: @date: 2022-07-10 17:06
 * @description：符号的示例文件
 * @update: 2022-07-10 15:28
 */

import React, {useState} from "react";
import style from './wzFuHaoExample002.module.less'

function WzFuHao002(props) {
    const [Content, setContent] = useState("")


    const handleChange = (e) => {
        setContent(e.target.value)
        props.result(e.target.value)
    }


    return (
        <div className={style.container}>
            <input onChange={handleChange}/>
            <h1>{Content}</h1>
        </div>
    )
}

export default WzFuHao002