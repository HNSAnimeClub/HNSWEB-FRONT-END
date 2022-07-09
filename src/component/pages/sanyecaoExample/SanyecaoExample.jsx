/*
 * @Author: 三椰草Ω 329175824@qq.com
 * @Date: 2022-07-03 15:48:10
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-07-03 18:47:47
 * @FilePath: SanyecaoExample.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE1
 */

import React ,{useState} from "react";
import style from './SanyecaoExample.module.less'

function SanyecaoExample(){

    const [title,SetTitle]=useState(1)

    const handleClick=()=>{
        SetTitle(!title)
    }


    return(
        <div>
            <h1 className={`${title?style.title:style.titlePrimary}`}>来自三椰草</h1>
            <button onClick={handleClick}>调整三椰草</button>
        </div>
    )
}
export default SanyecaoExample