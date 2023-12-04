import React, { useState } from "react"
import "./navbar.css"
import { FaPlaneDeparture } from "react-icons/fa"
import { IoIosCloseCircle } from "react-icons/io"
import { TbGridDots } from "react-icons/tb"
import { useNavigate } from "react-router-dom"

const Navbar = () => {
  // 设置导航栏的开启与关闭
  const [active, setActive] = useState("navBar")
  const toggleNavbar = () => {
    if (active === "navBar") {
      setActive("navBar showNavbar")
    } else {
      setActive("navBar")
    }
  }

  const navigate = useNavigate()
  return (
    <section className='navBarSection'>
      <header className='header flex'>
        <div className='logoDiv'>
          <a href='#' className='logo flex'>
            <h1>
              <FaPlaneDeparture className='icon' /> Travel.
            </h1>
          </a>
        </div>

        <div className={active}>
          {/* 导航栏 */}
          <ul className='navLists flex'>
            <li className='navItem'>
              <a href='#' className='navLink'>
                Home
              </a>
            </li>

            <li className='navItem'>
              <a href='#' className='navLink'>
                Packages
              </a>
            </li>

            <li className='navItem'>
              <a href='#' className='navLink'>
                Shop
              </a>
            </li>

            <li className='navItem'>
              <a href='#' className='navLink'>
                About
              </a>
            </li>

            <li className='navItem'>
              <a href='#' className='navLink'>
                Pages
              </a>
            </li>

            <li className='navItem'>
              <a href='#' className='navLink'>
                News
              </a>
            </li>

            <li className='navItem'>
              <a href='#' className='navLink'>
                Contact
              </a>
            </li>

            <button className='btn' onClick={() => navigate("/login")}>
              <a href='#'>SIGN UP</a>
            </button>
          </ul>

          {/* 关闭导航栏 */}
          <div className='closeNavbar' onClick={toggleNavbar}>
            <IoIosCloseCircle className='icon' />
          </div>
        </div>

        <div className='toggleNavbar' onClick={toggleNavbar}>
          <TbGridDots className='icon' />
        </div>
      </header>
    </section>
  )
}

export default Navbar
