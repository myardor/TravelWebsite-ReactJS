import React, { useState } from "react"
import "./navbar.css"
import { useNavigate } from "react-router-dom"

import { FaPlaneDeparture, FaUser } from "react-icons/fa"
import { IoIosCloseCircle } from "react-icons/io"
import { TbGridDots } from "react-icons/tb"
import { MdHotel } from "react-icons/md"
import { MdFlight } from "react-icons/md"
import { MdHome } from "react-icons/md"
import { LuPalmtree } from "react-icons/lu"
import { MdLogout } from "react-icons/md"

const Navbar = () => {
  // 设置导航栏的开启与关闭
  const [active, setActive] = useState("navBar")
  const [logtShow, setLogtShow] = useState(false)
  const toggleNavbar = () => {
    if (active === "navBar") {
      setActive("navBar showNavbar")
    } else {
      setActive("navBar")
    }
  }
  const navigate = useNavigate()

  const onLogout = () => {}

  return (
    <section className='navBarSection'>
      <header className='header flex'>
        <div className='logoDiv'>
          <a href='#' className='logo flex'>
            <h1 onClick={() => navigate("/")}>
              <FaPlaneDeparture className='icon' /> Travel.
            </h1>
          </a>
        </div>

        <div className={active}>
          {/* 导航栏 */}
          <ul className='navLists flex' onClick={toggleNavbar}>
            {/* home */}
            <li className='navItem' onClick={() => navigate("/")}>
              <a href='#' className='navLink flex'>
                <MdHome className='icon' />
                Home
              </a>
            </li>
            {/* stay */}
            <li className='navItem' onClick={() => navigate("/stay")}>
              <a href='#' className='navLink flex'>
                <MdHotel className='icon' />
                Stays
              </a>
            </li>
            <li className='navItem' onClick={() => navigate("/flight")}>
              <a href='#' className='navLink flex'>
                <MdFlight className='icon' />
                Flight
              </a>
            </li>
            <li className='navItem' onClick={() => navigate("/attraction")}>
              <a href='#' className='navLink flex'>
                <LuPalmtree className='icon' />
                Attractions
              </a>
            </li>

            {localStorage.getItem("nickname") ? (
              <div
                className='usrCenter'
                onMouseOver={() => {
                  setLogtShow(true)
                }}
                onMouseOut={() => {
                  setLogtShow(false)
                }}
              >
                {!logtShow && (
                  <button className='btn'>
                    <a href='#' className='nickname'>
                      <i className='usrIcon'>
                        <FaUser />
                      </i>
                      {localStorage.getItem("nickname")}
                    </a>
                  </button>
                )}
                {logtShow && (
                  <button
                    className='btn logoutBtn'
                    onClick={() => localStorage.clear("nickname")}
                  >
                    <a href='#' className='nickname'>
                      <i className='logoutIcon'>
                        <MdLogout />
                      </i>
                      Log Out
                    </a>
                  </button>
                )}
              </div>
            ) : (
              <button className='btn' onClick={() => navigate("/login")}>
                <a href='#'>SIGN IN</a>
              </button>
            )}
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
