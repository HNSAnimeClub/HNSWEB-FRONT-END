import React from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import {nanoid} from "nanoid";
import App from "./App";
import Example from "./component/example/Example";
import Test from "./component/testArea/Test";


export default function RouterConfig() {
  const router = [
    {
      element: <App/>,
      path: "/"
    }, {
      element: <Example/>,
      path: "page/example"
    }, {
      element: <Test/>,
      path: "/test"
    }

  ]

  return (
    <BrowserRouter>
      <Routes>
        {
          router.map(item => {
            return <Route path={item.path} element={item.element} key={nanoid()}/>
          })
        }
      </Routes>
    </BrowserRouter>
  )

}