/**
 * @name: Graniexample.jsx
 * @author: 格拉尼
 * @date: 2022-07-10 16:39
 * @description：格拉尼的示例文件
 */

import React ,{useState} from "react";
import style from './Graniexample.module.less'

function GraniExample() {

    const [title, setTitle] = useState({name: "斯卡蒂", age: "20"})

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


/*function GraniExample() {
    const[content,setContent]=useState("")
    const handleChange=(text)=>{
        setContent(text.target.value)
    }

    return(
        <div classname={StyleSheet.container}>
            <input onChange={handleChange}/>
            <h1>{content}</h1>
        </div>
    )
}
*/

export default GraniExample