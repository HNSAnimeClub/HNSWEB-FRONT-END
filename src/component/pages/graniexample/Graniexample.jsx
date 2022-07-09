/**
 * @name: ${NAME}
 * @author: ${USER}
 * @date: ${YEAR}-${MONTH}-${DAY} ${HOUR}:${MINUTE}
 * @description：该文件的描述
 */

import React ,{useState} from "react";
import style from './Graniexample.module.less'

function GraniExample() {
    const [title, setTitle] = useState({name: "斯卡蒂", age: "25"})

    const handleClick = () => {

        setTitle((pre) => {
            title.name = "格拉尼"
            return {...pre, ...title}
        })
    }


    return(
        <div>
            <h1 className={`${title ? style.title : style.titlePrimary}`}>{title.name} {title.age}</h1>
            <button onClick={handleClick}>按钮点击变化</button>
        </div>
)
}
export default GraniExample
