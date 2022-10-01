/*
 * @Author: 三椰草Ω 3291875824@qq.com
 * @Date: 2022-08-21 15:01:28
 * @LastEditors: 三椰草Ω 3291875824@qq.com
 * @LastEditTime: 2022-08-21 16:35:07
 * @FilePath: \HNSWEB-FRONT-END\src\component\pages\sanyecaoExample\SanyecaoGoback.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, {useRef, useState} from 'react';
import style from './SanyecaoExample.module.less'
import IconArrowTop from "../../../icon/iconArrowTop/iconArrowTop";
import {debounce} from "../../../utils/hnsDebounce";

function SanyecaoGoback(props)
{
    const handleClick=()=>
    {
        window.scrollTO({
            top:0,
            behavior:"smooth"
    })
    }

const [show,setShow]=useState(false)
window.onscroll=()=>{
    debounce(()=>{
        console.log("执行")
        if(window.scrollY>window.innerHeight/3)
        {
            setShow(true)
        }
        else
        setShow(false)
    },200)

}
return(
    <div>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <div className={`${style.main} ${show?style.show:""}`}OnClick={handleClick}> 
            <IconArrowTop/>
        </div>
    </div>
);
}
export default SanyecaoGoback