/*
 * @Author: 三椰草Ω 329175824@qq.com
 * @Date: 2022-07-03 15:48:10
 * @LastEditors: 三椰草Ω 3291875824@qq.com
 * @LastEditTime: 2022-07-17 16:50:41
 * @FilePath: SanyecaoExample.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE1
 */



import React ,{useState} from "react";
import style from './SanyecaoExample.module.less' 

function SanyecaoExample(props)
{
   const [Content,setContent]=useState("")

   const handleChange=(e)=>{
      setContent(e.target.value)
      props.result(e.target.value)
   }
      return(
         <div className={style.container}>
            <input onChange={handleChange}/>
         </div>
     
    )
}
export default SanyecaoExample

