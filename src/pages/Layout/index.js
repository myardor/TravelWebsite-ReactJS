import React from "react"

import Footer from "../../Components/Footer/Footer"
import Home from "../../Components/Home/Home"
import Main from "../../Components/Main/Main"
import Navbar from "../../Components/Navbar/Navbar"
import "./index.css"

const Layout = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Main />
      <Footer />
    </>
  )
}

export default Layout
