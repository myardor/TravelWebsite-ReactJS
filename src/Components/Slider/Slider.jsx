import React, { useState } from "react"
import "./Slider.css"

const imgs = [
  "https://r-xx.bstatic.com/xdata/images/xphoto/263x210/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=",
  "https://q-xx.bstatic.com/xdata/images/hotel/263x210/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o=",
  "https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=",
  "https://r-xx.bstatic.com/xdata/images/hotel/263x210/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o=",
  "https://r-xx.bstatic.com/xdata/images/hotel/263x210/52979454.jpeg?k=6ac6d0afd28e4ce00a8f817cc3045039e064469a3f9a88059706c0b45adf2e7d&o=",
  "https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450074.jpeg?k=7039b03a94f3b99262c4b3054b0edcbbb91e9dade85b6efc880d45288a06c126&o=",
  "https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450090.jpeg?k=52f6b8190edb5a9c91528f8e0f875752ce55a6beb35dc62873601e57944990e4&o=",
  "https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450058.jpeg?k=2449eb55e8269a66952858c80fd7bdec987f9514cd79d58685651b7d6e9cdfcf&o=",
]

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleNext = () => {
    setActiveIndex(activeIndex + 1)
  }

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1)
    } else {
      setActiveIndex(7)
    }
  }
  return (
    <div className='slider'>
      <h2>Browse by property type</h2>
      <ul>
        <li className='sliderItem'>
          <img
            src={imgs[activeIndex > 7 ? activeIndex % 7 : activeIndex]}
            alt=''
          />
        </li>
        <li className='sliderItem'>
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
        </li>
      </ul>
      <button className='prev' onClick={handlePrev}>
        prev
      </button>
      <button className='next' onClick={handleNext}>
        next
      </button>
    </div>
  )
}

export default Slider
