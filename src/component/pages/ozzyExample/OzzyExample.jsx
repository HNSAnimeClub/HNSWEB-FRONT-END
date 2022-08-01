/**
 * @name: OzzyExample.jsx
 * @author: Ozzy
 * @date: 2022-07-03 15:21
 * @description：奥兹的示例文件
 * @update: 2022-07-03 15:21
 */

import React, {useRef, useState} from "react";
import style from './ozzyExample.module.less'
import {filter} from "core-js/internals/array-iteration";

function OzzyExample() {

    const [data, setData] = useState([
        {
            name: "Ozzy"
        }
    ])

    const input = useRef()

    const handleClick = () => {
        let {value} = input.current
        data.push(
            {
                name: value
            }
        )
        setData([...data])
    }

    const deleteClick = (targetIndex) => {
        let temp = data.filter((item, index) => index !== targetIndex)
        setData(temp)
    }

    return (
        <div className={style.container}>
            <ul>
                {
                    data.map((item,index) => {
                        return (
                            <li key={item+index} onClick={event => deleteClick(index)}>{item.name}</li>
                        )
                    })
                }

            </ul>
            <div>
                <input ref={input}/>
                <button onClick={handleClick}>提交</button>
            </div>

        </div>
    )
}

export default OzzyExample