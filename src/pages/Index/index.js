import React from "react"

import Footer from "../../Components/Footer/Footer"
import Home from "../../Components/Home/Home"
import Main from "../../Components/Main/Main"
import Navbar from "../../Components/Navbar/Navbar"
import "./index.css"
import { Outlet } from "react-router-dom"
import Stay from "../Stay/Stay"

const Index = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Home />
      <Main />
      <Footer />
    </>
  )
}

export default Index
