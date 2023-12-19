import React, { useEffect, useState } from "react"
import "./Slider.css"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import axios from "axios"
import Aos from "aos"
import { getHotelDataAPI } from "../../apis"

const Slider = () => {
  const [hotelData, setHotelData] = useState([])
  const [moveDistance, setMoveDistance] = useState(0)
  // 当前最左边的图片索引 0时左按钮隐藏 5时右按钮隐藏
  const [activeIndex, setActiveIndex] = useState(0)

  // 请求hotel数据
  useEffect(() => {
    const getHotelData = async () => {
      const res = await getHotelDataAPI()
      setHotelData(res.data)
    }
    getHotelData()
  }, [])

  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])
  const handleNext = () => {
    // 判断
    if (activeIndex !== 6) {
      setMoveDistance(moveDistance - 19.65)
      setActiveIndex(activeIndex + 1)
    }
  }

  const handlePrev = () => {
    // 判断
    if (activeIndex !== 0) {
      setMoveDistance(moveDistance + 19.65)
      setActiveIndex(activeIndex - 1)
    }
  }
  return (
    <div className='slider' data-aos='fade-up'>
      <h2>Browse by property type</h2>
      {/* hotels */}
      <ul style={{ transform: `translateX(${moveDistance}rem)` }}>
        {hotelData.map(
          ({ imgUrl, itemTitle, itemLocation, itemScore, itemAssess }) => (
            <li className='sliderItem' key={imgUrl}>
              <img src={imgUrl} alt='' />
              <div className='itemText'>
                <h4 className='itemTitle'>{itemTitle}</h4>
                <div className='itemLocation'>{itemLocation}</div>
                <i className='itemScore'>{itemScore}</i>
                <span className='itemAssess'>{itemAssess}</span>
              </div>
            </li>
          )
        )}
      </ul>

      {/* prev and next buttons */}

      <button className='prev bn632-hover bn26' onClick={handlePrev}>
        <IoIosArrowBack className='IconLeft' />
      </button>

      <button className='next bn632-hover bn26' onClick={handleNext}>
        <IoIosArrowForward className='IconRight' />
      </button>
    </div>
  )
}

export default Slider
