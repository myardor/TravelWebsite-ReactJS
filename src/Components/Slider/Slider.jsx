import React, { useState } from "react"
import "./Slider.css"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

const imgs = [
  "https://cf.bstatic.com/xdata/images/hotel/square600/237686104.webp?k=3813d2af0058b6676f19e8d707977dd086b6fd873d46dd9c19a8aaba24f813ff&o=",
  "https://cf.bstatic.com/xdata/images/hotel/square600/228714298.webp?k=2e88556aac50ed7e31bdc4f399c385b1c2b3208d8a3c3fc622e770bc6d9b0c98&o=",
  "https://cf.bstatic.com/xdata/images/hotel/square600/366855457.webp?k=ef25b0c640c7c2f4fcac4c79509ef1dbb484c19f21a7c8cba18d9270d7f790e9&o=",
  "https://cf.bstatic.com/xdata/images/hotel/square600/210943150.webp?k=1d3cb2f9c178756981110c1d6f895a65793f0ab4e62a613ee9f7d4ae140a3bad&o=",
  "https://cf.bstatic.com/xdata/images/hotel/square600/179387540.webp?k=cbf33b04282d8beb50db374f587fedfc39a8787f761dc9ad3b823191cea4b5e1&o=",
  "https://cf.bstatic.com/xdata/images/hotel/square600/237686104.webp?k=3813d2af0058b6676f19e8d707977dd086b6fd873d46dd9c19a8aaba24f813ff&o=",
  "https://cf.bstatic.com/xdata/images/hotel/square600/228714298.webp?k=2e88556aac50ed7e31bdc4f399c385b1c2b3208d8a3c3fc622e770bc6d9b0c98&o=",
  "https://cf.bstatic.com/xdata/images/hotel/square600/366855457.webp?k=ef25b0c640c7c2f4fcac4c79509ef1dbb484c19f21a7c8cba18d9270d7f790e9&o=",
  "https://cf.bstatic.com/xdata/images/hotel/square600/210943150.webp?k=1d3cb2f9c178756981110c1d6f895a65793f0ab4e62a613ee9f7d4ae140a3bad&o=",
  "https://cf.bstatic.com/xdata/images/hotel/square600/179387540.webp?k=cbf33b04282d8beb50db374f587fedfc39a8787f761dc9ad3b823191cea4b5e1&o=",
]
/* [
  "https://r-xx.bstatic.com/xdata/images/xphoto/263x210/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=",
  "https://q-xx.bstatic.com/xdata/images/hotel/263x210/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o=",
  "https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=",
  "https://r-xx.bstatic.com/xdata/images/hotel/263x210/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o=",
  "https://r-xx.bstatic.com/xdata/images/hotel/263x210/52979454.jpeg?k=6ac6d0afd28e4ce00a8f817cc3045039e064469a3f9a88059706c0b45adf2e7d&o=",
  "https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450074.jpeg?k=7039b03a94f3b99262c4b3054b0edcbbb91e9dade85b6efc880d45288a06c126&o=",
  "https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450090.jpeg?k=52f6b8190edb5a9c91528f8e0f875752ce55a6beb35dc62873601e57944990e4&o=",
  "https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450058.jpeg?k=2449eb55e8269a66952858c80fd7bdec987f9514cd79d58685651b7d6e9cdfcf&o=",
] */

const Slider = () => {
  const [moveDistance, setMoveDistance] = useState(0)
  const [leftBtnShow, setLeftBtnShow] = useState(true)
  const [rightBtnShow, setRightBtnShow] = useState(true)

  const handleNext = () => {
    setMoveDistance(moveDistance - 314.4)
  }

  const handlePrev = () => {
    setMoveDistance(moveDistance + 314.4)
  }
  return (
    <div className='slider'>
      <h2>Browse by property type</h2>
      {/* hotels */}
      <ul style={{ transform: `translateX(${moveDistance}px)` }}>
        {/* <li className='sliderItem'>
          <img
            src={imgs[activeIndex > 7 ? activeIndex % 7 : activeIndex]}
            alt=''
          />
        </li> */}
        {imgs.map(item => (
          <li className='sliderItem'>
            <img src={item} alt='' />
            <div className='itemText'>
              <h4 className='itemTitle'>Harbor View</h4>
              <div className='itemLocation'>United Kingdom, Isle Of Skye</div>
              <i className='itemScore'>8.6</i>
              <span className='itemAssess'>Excellent·293 views</span>
            </div>
          </li>
        ))}
        {/* <li className='sliderItem'>
          <img
            src={
              imgs[
                activeIndex + 1 > 7 ? (activeIndex + 1) % 7 : activeIndex + 1
              ]
            }
            alt=''
          />
        </li>
        <li className='sliderItem'>
          <img
            src={
              imgs[
                activeIndex + 2 > 7 ? (activeIndex + 2) % 7 : activeIndex + 2
              ]
            }
            alt=''
          />
        </li>
        <li className='sliderItem'>
          <img
            src={
              imgs[
                activeIndex + 3 > 7 ? (activeIndex + 3) % 7 : activeIndex + 3
              ]
            }
            alt=''
          />
        </li> */}
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
