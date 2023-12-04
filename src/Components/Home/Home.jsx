import React, { useEffect, useState } from "react"
import "./home.css"
import homeVideo from "../../assets/video.mp4"
import { CiLocationOn, CiSearch } from "react-icons/ci"
import { FiFacebook } from "react-icons/fi"
import { FaTwitter, FaInstagram, FaSearch } from "react-icons/fa"
import { BsListTask } from "react-icons/bs"
import { TbApps } from "react-icons/tb"
import { IoIosArrowDown } from "react-icons/io"

import Aos from "aos"
import "aos/dist/aos.css"

const Home = ({
  smallText = "Our Packages",
  homeTitle = "Search your Holiday",
  stay = false,
  video = homeVideo,
}) => {
  // 动画效果
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  // 设置stayInput表单内元素状态
  const [adults, setAdults] = useState(2)
  const [children, setChildren] = useState(1)
  const [rooms, setRooms] = useState(0)

  // 处理StayInput框的函数=> 弹出选择框 设置相应的状态
  const stayInput = () => {
    console.log("stayClick")
  }
  return (
    <section className='home'>
      {/* <div className='overlay'></div> */}
      <video src={video} type='video/mp4' autoPlay muted loop></video>

      <div className='homeContent container'>
        <div className='textDiv' data-aos='fade-up'>
          <span className='smallText'>{smallText}</span>
          <h1 className='homeTitle'>{homeTitle}</h1>
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
          {/* 预算 */}
          {!stay && (
            <div className='priceInput'>
              <div className='label_total flex'>
                <label htmlFor='price'>Max price:</label>
                <h3 className='total'>$5000</h3>
              </div>

              <div className='input flex'>
                <input type='range' max='5000' min='1000' />
              </div>
            </div>
          )}

          {/* 客房数输入框 */}
          {stay && (
            <div className='destinationInput' onClick={stayInput}>
              <label htmlFor='city'>Search your destination:</label>
              <div className='input flex'>
                <input
                  type='text'
                  placeholder={`${adults} adults·${children} children·${rooms} room(s)`}
                  readOnly={true}
                />
                <IoIosArrowDown className='icon' />
                {/* <div className='stayInput'>
                  <li className='inputItem flex'>
                    <div className='text'>Adults</div>
                    <div className='count flex'>
                      <button>-</button>2<button>+</button>
                    </div>
                  </li>
                </div> */}
              </div>
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
  )
}

export default Home
