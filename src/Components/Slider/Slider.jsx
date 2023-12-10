import React, { useEffect, useState } from "react"
import "./Slider.css"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import axios from "axios"
import Aos from "aos"

// const imgs = [
//   "https://cf.bstatic.com/xdata/images/hotel/square600/178421496.webp?k=94836d8c61053e484c5ef0110211d6eacf89d8e58f8dfa3e58d14833287cc3a1&o=",
//   "https://cf.bstatic.com/xdata/images/hotel/square600/187853972.webp?k=dd753431cf4b638642614dc060512d832d24f3249eef30b9a5f18601d2ac5635&o=",
//   "https://cf.bstatic.com/xdata/images/hotel/square600/366855457.webp?k=ef25b0c640c7c2f4fcac4c79509ef1dbb484c19f21a7c8cba18d9270d7f790e9&o=",
//   "https://cf.bstatic.com/xdata/images/hotel/square600/210943150.webp?k=1d3cb2f9c178756981110c1d6f895a65793f0ab4e62a613ee9f7d4ae140a3bad&o=",
//   "https://cf.bstatic.com/xdata/images/hotel/square600/179387540.webp?k=cbf33b04282d8beb50db374f587fedfc39a8787f761dc9ad3b823191cea4b5e1&o=",
//   "https://cf.bstatic.com/xdata/images/hotel/square600/398620320.webp?k=10e476830ecfd5a062072a6318612393bc414bd75c10bb44dd29a1d6de5b225b&o=",
//   "https://cf.bstatic.com/xdata/images/hotel/square600/119988219.webp?k=afbd4548022812f6bb932130b99252b8c80939f18a92972a8d94b627b943a6d2&o=",
//   "https://cf.bstatic.com/xdata/images/hotel/square600/126764303.webp?k=46a8a949ef420510834df06d0d88e293fbaae80cd1e17883cb78c1bba3eb0366&o=",
//   "https://cf.bstatic.com/xdata/images/hotel/square600/131056675.webp?k=b270059e6cb5f68d7d5e114a7db1dba9c0664f79ce1b6962912950ed002a5dc8&o=",
//   "https://cf.bstatic.com/xdata/images/hotel/square600/131500906.webp?k=b6f638eadb7c9632498a9e9a15440987a22489684b8825b0cb235bd3c79f07de&o=",
// ]

// const hotelData = [
//   {
//     imgUrl: imgs[0],
//     itemTitle: "Harbor View",
//     itemLocation: "United Kingdom, Isle Of Skye",
//     itemScore: 8.6,
//     itemAssess: "Excellent·293 views",
//   },
//   {
//     imgUrl: imgs[1],
//     itemTitle: "Oceanfront Oasis",
//     itemLocation: "Maldives",
//     itemScore: 9.2,
//     itemAssess: "Superb·420 views",
//   },
//   {
//     imgUrl: imgs[2],
//     itemTitle: "Mountain Retreat",
//     itemLocation: "Switzerland, Zermatt",
//     itemScore: 8.9,
//     itemAssess: "Great·312 views",
//   },
//   {
//     imgUrl: imgs[3],
//     itemTitle: "Cityscape Delight",
//     itemLocation: "United States, New York",
//     itemScore: 9.5,
//     itemAssess: "Exceptional·512 views",
//   },
//   {
//     imgUrl: imgs[4],
//     itemTitle: "Tropical Paradise",
//     itemLocation: "Thailand, Phuket",
//     itemScore: 9.0,
//     itemAssess: "Fantastic·365 views",
//   },
//   {
//     imgUrl: imgs[5],
//     itemTitle: "Luxury Haven",
//     itemLocation: "France, Paris",
//     itemScore: 8.8,
//     itemAssess: "Superb·287 views",
//   },
//   {
//     imgUrl: imgs[6],
//     itemTitle: "Serenity Resort",
//     itemLocation: "Maldives",
//     itemScore: 9.4,
//     itemAssess: "Outstanding·456 views",
//   },
//   {
//     imgUrl: imgs[7],
//     itemTitle: "Alpine Escape",
//     itemLocation: "Austria, Innsbruck",
//     itemScore: 8.7,
//     itemAssess: "Excellent·334 views",
//   },
//   {
//     imgUrl: imgs[8],
//     itemTitle: "Urban Retreat",
//     itemLocation: "Japan, Tokyo",
//     itemScore: 9.1,
//     itemAssess: "Superb·398 views",
//   },
//   {
//     imgUrl: imgs[9],
//     itemTitle: "Historic Elegance",
//     itemLocation: "Italy, Rome",
//     itemScore: 8.5,
//     itemAssess: "Great·289 views",
//   },
// ]
const Slider = () => {
  const [hotelData, setHotelData] = useState([])
  const [moveDistance, setMoveDistance] = useState(0)
  // 当前最左边的图片索引 0时左按钮隐藏 5时右按钮隐藏
  const [activeIndex, setActiveIndex] = useState(0)

  // 请求hotel数据
  useEffect(() => {
    const getHotelData = async () => {
      const res = await axios({
        url: "http://47.95.39.183:3005/hotelData",
      })
      setHotelData(res.data)
      // console.log(res.data)
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
