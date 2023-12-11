import React, { useEffect, useState } from "react"
import "./Stay.css"
import stayVideo from "../../assets/stayVideo.mp4"

// 导入动画库
import Aos from "aos"
import "aos/dist/aos.css"

// 导入字体
import { CiLocationOn } from "react-icons/ci"
import { FiFacebook } from "react-icons/fi"
import { FaTwitter, FaInstagram, FaSearch } from "react-icons/fa"
import { BsListTask } from "react-icons/bs"
import { TbApps } from "react-icons/tb"
import { IoIosArrowDown } from "react-icons/io"

// 导入组件
import Slider from "../../Components/Slider/Slider"
import Footer from "../../Components/Footer/Footer"
import Tabs from "../../Components/Tabs/Tabs"

const Stay = () => {
  // 动画效果
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  // 设置stayInput表单内元素状态
  const [adults, setAdults] = useState(1)
  const [children, setChildren] = useState(0)
  const [rooms, setRooms] = useState(1)
  const [active, setActive] = useState(false)

  // 处理StayInput框的函数=> 弹出选择框 设置相应的状态
  return (
    <>
      <section className='stay'>
        {/* <div className='overlay'></div> */}
        <video src={stayVideo} type='video/mp4' autoPlay muted loop></video>

        <div className='homeContent container'>
          <div className='textDiv' data-aos='fade-up'>
            <span className='smallText'>Find deals for any season</span>
            <h1 className='homeTitle'>
              From cozy bed & breakfasts to luxury hotels
            </h1>
          </div>

          {/* 卡片表单 */}
          <div data-aos='fade-up' className='cardDiv grid'>
            {/* 目的地 */}
            <div className='destinationInput'>
              <label htmlFor='city'>Search your destination:</label>
              <div className='input flex'>
                <input type='text' placeholder='Enter name here...' />
                <CiLocationOn className='icon' />
              </div>
            </div>
            {/* 日期 */}
            <div className='dateInput'>
              <label htmlFor='date'>Select your date:</label>
              <div className='input flex'>
                <input type='date' />
              </div>
            </div>

            {/* 客房数输入框 */}
            <div className='destinationInput'>
              <label htmlFor='city'>Select your housing information:</label>
              <div className='input flex' onClick={() => setActive(!active)}>
                <input
                  type='text'
                  placeholder={`${adults} adults·${children} children·${rooms} room(s)`}
                  readOnly={true}
                />
                <IoIosArrowDown className='icon' />
              </div>
            </div>

            {/* 输入框小卡片 */}
            {active && (
              <div className='stayInput'>
                {/* adults */}
                <li className='inputItem flex'>
                  <div className='text'>Adults</div>
                  <div className='count flex'>
                    <button
                      onClick={() => {
                        if (adults > 0) setAdults(adults - 1)
                      }}
                    >
                      -
                    </button>
                    {adults}
                    <button onClick={() => setAdults(adults + 1)}>+</button>
                  </div>
                </li>
                {/* children */}
                <li className='inputItem flex'>
                  <div className='text'>Children</div>
                  <div className='count flex'>
                    <button
                      onClick={() => {
                        if (children > 0) setChildren(children - 1)
                      }}
                    >
                      -
                    </button>
                    {children}
                    <button onClick={() => setChildren(children + 1)}>+</button>
                  </div>
                </li>
                {/* room */}
                <li className='inputItem flex'>
                  <div className='text'>Room</div>
                  <div className='count flex'>
                    <button
                      onClick={() => {
                        if (rooms > 0) setRooms(rooms - 1)
                      }}
                    >
                      -
                    </button>
                    {rooms}
                    <button onClick={() => setRooms(rooms + 1)}>+</button>
                  </div>
                </li>

                {/* 完成按钮 */}
                <button
                  className='btn'
                  onClick={() => {
                    setActive(false)
                    console.log(active)
                  }}
                >
                  FINISH
                </button>
              </div>
            )}

            {/* 筛选 */}
            <div className='searchOptions flex'>
              <FaSearch className='icon' />
              <span>SEARCH</span>
            </div>
          </div>

          {/* 底部图标栏 */}
          <div data-aos='fade-up' className='homeFooterIcons flex'>
            <div className='rightIcons'>
              <FiFacebook className='icon' />
              <FaTwitter className='icon' />
              <FaInstagram className='icon' />
            </div>
            <div className='leftIcons'>
              <BsListTask className='icon' />
              <TbApps className='icon' />
            </div>
          </div>
        </div>
      </section>

      {/* 房间轮播图 */}
      <Slider />

      <Tabs />
      <Footer data-aos='fade-up' />
    </>
  )
}

export default Stay
