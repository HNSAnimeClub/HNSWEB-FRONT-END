/**
 * @name: MiLuoExample.jsx
 * @author: 米洛
 * @date: 2022-07-10 15:25
 * @description：米洛组件
 */

import React, {useEffect, useRef, useState} from 'react';
import {useRecoilValue} from "recoil";
import {testModel} from "../../testArea/testModel";

//
function MiLuoExample(props) {

  const state = useRecoilValue(testModel)
  useEffect(() => {
    console.log(state)
  }, [state])
  return (
    <div>米洛</div>
  )

}

export default MiLuoExample;



