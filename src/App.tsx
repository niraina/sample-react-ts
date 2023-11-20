/* eslint-disable @typescript-eslint/no-explicit-any */
// import { ROUTES } from "./shared/router/Routes"
import { ROUTES } from "@shared/router/Routes"
import GlobalLayout from "./widgets/Layout"
import {Routes, Route} from "react-router-dom"

function App() {

  return (
    <GlobalLayout>
      <Routes>
        {ROUTES.map((item: any, index: number) => (
          <Route key={index} path={item.path} element={item.element}/>
        ))}
      </Routes>
    </GlobalLayout>
  )
}

export default App
