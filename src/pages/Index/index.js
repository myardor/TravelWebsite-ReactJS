import React from "react"

import Footer from "../../Components/Footer/Footer"
import Home from "../../Components/Home/Home"
import Main from "../../Components/Main/Main"
import "./index.css"

// 首页
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
