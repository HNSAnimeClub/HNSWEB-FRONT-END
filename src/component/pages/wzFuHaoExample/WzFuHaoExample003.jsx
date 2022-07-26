/**
 * @name: WzFuHaoExample
 * @author: WzFuHao
 * @date: @date: 2022-07-17 14:52
 * @description：符号的组间通讯
 * @update: 2022-07-10 15:28
 */
import React from "react";
import WzFuHao002 from "./WzFuHaoExample002";


function WzFuHao003(props) {
    const getResult = (value) => {
        console.log("经验+1,头发-1")
    }

    return (
        <div>
            <WzFuHao002 result={getResult}>0000</WzFuHao002>
        </div>
    );
}

export default WzFuHao003