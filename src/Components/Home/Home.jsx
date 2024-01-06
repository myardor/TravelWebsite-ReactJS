import React, { useEffect, useState } from "react"
import "./home.css"
import homeVideo from "../../assets/video.mp4"
import { CiLocationOn } from "react-icons/ci"
import { FiFacebook } from "react-icons/fi"
import { FaTwitter, FaInstagram, FaSearch } from "react-icons/fa"
import { BsListTask } from "react-icons/bs"
import { TbApps } from "react-icons/tb"

import Aos from "aos"
import "aos/dist/aos.css"

const Home = ({
  smallText = "Our Packages",
  homeTitle = "Search your Holiday",
  video = homeVideo,
}) => {
  // 动画效果
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  const [location, setLocation] = useState({})

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        console.log(position.coords.latitude, position.coords.longitude)
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        })
      })
    } else {
      alert("Geolocation is not supported by this browser.")
    }
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
              <CiLocationOn className='icon' onClick={getLocation} />
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

          <div className='priceInput'>
            <div className='label_total flex'>
              <label htmlFor='price'>Max price:</label>
              <h3 className='total'>$5000</h3>
            </div>

            <div className='input flex'>
              <input type='range' max='5000' min='1000' />
            </div>
          </div>

          {/* 筛选 */}
          <div className='searchOptions flex'>
            <FaSearch className='icon' />
            <span>SEARCH</span>
          </div>
        </div>

        {/* 底部图标栏 */}
        <div className='homeFooterIcons flex'>
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
