/*
 * @Author: 三椰草Ω 3291875824@qq.com
 * @Date: 2022-07-31 14:29:54
 * @LastEditors: 三椰草Ω 3291875824@qq.com
 * @LastEditTime: 2022-08-07 14:25:43
 * @FilePath: \HNSWEB-FRONT-END\src\component\pages\sanyecaoExample\SanyecaoExample2.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React,{useState} from "react";
import { useRef } from "react";
import { nanoid } from "nanoid";
import style from './SanyecaoExample.module.less' 

function SanyecaoExample2(props){
    const [data,setData]=useState([
        {
            name:"sanyecao"
        },
        {
            name:"SanYeCao"
        },
        {
            name:"TRUE-sanyecao"
        }
    ])
   const input=useRef()
   const submit=()=>{
    let {value}=input.current
       data.push({
        name:value
       })
       setData([...data])
   }


   const deleteLi=(targetIndex)=>{
    let temp=data.filter((item,index)=>index!==targetIndex)
    setData(temp)
   }

    return(
        <div className={style.container}>
            <ul>
                {
                    data.map((item,index)=>{
                    return( 
                    <li key={nanoid()} onClick={event=>deleteLi(index)}>{item.name}</li>
                )
                  })
                }
            </ul>
            <input ref={input}/>
            <button onClick={submit}>提交</button>
        </div>
    )
}
export default SanyecaoExample2