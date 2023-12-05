import React from "react"

import Navbar from "../../Components/Navbar/Navbar"
import "./index.css"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <>
      <Navbar />
      {/* 二级路由出口（导航栏下部） */}
      <Outlet />
    </>
  )
}

export default Layout
