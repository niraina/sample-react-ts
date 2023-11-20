import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import List from './List'

const Products = () => {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route path="/" element={<List />} />
      </Route>
    </Routes>
  )
}

export default Products