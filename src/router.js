import React from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import {nanoid} from "nanoid";
import App from "./App";
import Example from "./component/example/Example";


export default function RouterConfig() {
  const router = [
    {
      element: <App/>,
      path: "/"
    }, {
      element: <Example/>,
      path: "page/example"
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