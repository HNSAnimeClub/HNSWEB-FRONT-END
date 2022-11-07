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
import {nanoid} from "nanoid";

function OzzyExample() {

    const [data, useData] = useState([1, 23])
    const input = useRef()
    const submit = () => {
        let {value} = input.current
        if (value) {
            data.push(value)
        }
        useData([...data])
    }

    const deleteClick = (targetIndex) => {
        let temp = data.filter((item, index) => index !== targetIndex)
        useData(temp)
    }

    return (
        <div className={style.container}>
            <input ref={input}/>
            <button onClick={submit}>提交</button>
            <div>
                {
                    data.map((value, targetIndex) => {
                        return (
                            <div key={nanoid()}>
                                {value}
                                <button onClick={event => deleteClick(targetIndex)}>删除</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default OzzyExample
