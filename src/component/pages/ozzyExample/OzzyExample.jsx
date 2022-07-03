/**
 * @name: OzzyExample.jsx
 * @author: Ozzy
 * @date: 2022-07-03 15:21
 * @description：奥兹的示例文件
 * @update: 2022-07-03 15:21
 */

import React, {useState} from "react";
import style from './ozzyExample.module.less'

function OzzyExample() {
    const [state, setState] = useState(true)

    const handleClick = () => {
        setState(!state)
    }

    return (
        <div className={style.container}>
            <span className={state ? style.title : style.titlePrimary}>{state ? "好家伙" : "az"}</span>
            <button onClick={handleClick}>点击按钮发生变化</button>
            {state && <span>wocao</span>}
        </div>
    )
}

export default OzzyExample