/**
 * @name: WzFuHaoExample001
 * @author: WzFuHao
 * @date: 2022-07-010 15:28
 * @description：符号的示例文件
 * @update: 2022-07-10 15:28
 */

import React, {useState} from "react";
import style from './wzFuHaoExample001.module.less'


function WzFuHao001() {
    let abb = "尝试001"

    //001
    const [title, setTitle] = useState("尝试001")


    const handleClick = () => {
        setTitle("尝试002")

    }
    return (<div className={style.title}>
            {abb}<h1 onClick={handleClick}>{title}</h1></div>
    )
}

export default WzFuHao001