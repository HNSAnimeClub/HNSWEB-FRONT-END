import React, {lazy, Suspense} from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import {nanoid} from "nanoid";
import Test from "./component/testArea/Test";
import Index from "./component/pages/main";
import HNSLoading from "./component/baseUI/hnsLoading/HNSLoading";

/**
 * @Author: 米洛
 * @Date: 2022-6-17 22:37
 * @returns {JSX.Element}
 * @constructor
 * @description 这是懒加载路由组件。在以往，路由需要我们手动进行配置，例如以下格式：
 *  <Route path={"/路径"} element={<组件/>>} key={nanoid()}/>
 *  一旦页面多了，每次自己手动写就显得很呆，而且通过 import 组件 from '路径' 这钟方式引入会在启动时就将所有的组件引入，这样会导致页面加载非常慢。
 *  我们可以通过 require.context('/路径',是否检索子文件夹，正则表达式（找后缀名指定的文件）) 来进行自动配置
 *  keys() 是每个组件从 ./component/pages 出发时的相对路径数组
 *  通过该数组，我们可以知道有多少个组件需要遍历，通过以下方式可以懒加载的形式将组件引入：
 *  const Element = lazy(() => import('/路径'))
 *  最后，需要在  <Routes> 标签外包裹以下组件：
 *   <Suspense fallback={}>
 *   其中 fallback 类似于视频里的转场，目标组件尚在加载，需要一个 非懒加载组件 告诉用户正在加载，提升用户体验
 */
export default function RouterConfig() {

  const router = []
  const component = require.context('./component/pages', true, /\.(jsx)$/)
  const typeReg = /^(pages\/admin)/g
  component
    .keys()
    .forEach((key, index) => {
      let pathArr = component.keys()[index]
      const Element = lazy(() => import("./component/pages/".concat(pathArr.slice(2, pathArr.length - 4))))
      router.push({
        element: <Element/>,
        path: `${pathArr.slice(2, pathArr.length - 4)}`
      })
    })

  return (
    <BrowserRouter>
      <Suspense fallback={<HNSLoading fullScreen/>}>
        <Routes>
          <Route path={"/"} element={<Index/>} key={nanoid()}/>
          <Route path={"/test"} element={<Test/>} key={nanoid()}/>
          {
            router.map(item => {
              return (
                <Route path={item.path} element={item.element} key={nanoid()}/>
              )
            })
          }
        </Routes>
      </Suspense>
    </BrowserRouter>
  )

}