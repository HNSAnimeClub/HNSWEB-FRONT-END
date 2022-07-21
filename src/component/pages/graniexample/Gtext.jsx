/**
 * @name: Gtext.jsx
 * @author: 27300
 * @date: 2022-07-17 16:16
 * @description：该文件的描述
 */
import React from 'react';
import style from './Graniexample'
import Graniexample from "./Graniexample";
function GraniTest(props) {
    const getResult=(value)=>{
        console.log("好耶")
    }
    return(
        <div>
            <Graniexample result={getResult}>格拉尼</Graniexample>
        </div>
    );
}
export default GraniTest