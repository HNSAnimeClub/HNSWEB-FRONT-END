/*
 * @Author: 三椰草Ω 3291875824@qq.com
 * @Date: 2022-07-17 15:24:11
 * @LastEditors: 三椰草Ω 3291875824@qq.com
 * @LastEditTime: 2022-07-17 16:45:04
 * @FilePath: \HNSWEB-FRONT-END\src\component\testArea\SanyecaoTest.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import SanyecaoExample from './SanyecaoExample'
import React from 'react'

function SanyecaoTest(props){
    const getResult=(value)=>{
        console.log("complete")
    }
    return(
        <div>
            <SanyecaoExample result={getResult}>向三椰草Ω输入</SanyecaoExample>
        </div>
    )
}
export default SanyecaoTest