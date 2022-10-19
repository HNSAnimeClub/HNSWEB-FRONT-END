/**
 * @name: testModel
 * @author: 米洛
 * @date: 2022-10-12 20:20
 * @description：状态仓库
 */
import {atom} from "recoil";

export const testModel = atom({
  key: "testModel",
  default: [
    {title: "hello"},
    {title: "hell2"},
    {title: "hello3"}
  ]
})