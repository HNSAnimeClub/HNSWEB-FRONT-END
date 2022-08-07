/*
 * @Author: 三椰草Ω 3291875824@qq.com
 * @Date: 2022-08-07 14:40:10
 * @LastEditors: 三椰草Ω 3291875824@qq.com
 * @LastEditTime: 2022-08-07 16:32:27
 * @FilePath: \HNSWEB-FRONT-END\src\component\pages\sanyecaoExample\SanyecaoExchange.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React,{useState} from "react";
import { nanoid } from "nanoid";

function SanyecaoExchange(props) {
    const [stack, setStack] = useState([
      {
        Name: "sanyecao"
      }, {
        Name: "SANYECAO"
      }, {
        Name: "TRUE-sanyecao"
      },
    ])
    const [targetIndex, setTargetIndex] = useState([])
  
    const switchItem = () => {
      let preIndex = targetIndex[0]
      let lastIndex = targetIndex[1];
      [stack[preIndex], stack[lastIndex]] = [stack[lastIndex], stack[preIndex]]
      setStack([...stack])
    }
  
    const saveIndex = (index) => {
      if (targetIndex.length < 3){
        targetIndex.push(index)
       }
    }
  
    return (
      <div>
        <ul>
          {
            stack.map((item, index) => {
              return (
                <li key={nanoid()} onClick={event => saveIndex(index)}>{item.Name}</li>
              )
            })
          }
        </ul>
        <button onClick={switchItem}>Change</button>
      </div>
  
    );
  }
  
  export default SanyecaoExchange;