import React from "react"
import "./Attraction.css"

// 导入组件
import Home from "../../Components/Home/Home"
import Footer from "../../Components/Footer/Footer"
import Destinations from "../../Components/Destinations/Destinations"

// 导入字体
import { MdOutlineAttractions } from "react-icons/md"
import { LuClipboardCheck } from "react-icons/lu"
import { RiCustomerService2Line } from "react-icons/ri"

import attrVideo from "../../assets/attraction.mp4"

const Attraction = () => {
  return (
    <>
      <div className='attraction'>
        <Home
          smallText=' Attractions, activities, and experiences'
          homeTitle='Discover new attractions and experiences'
          video={attrVideo}
        />
        <Destinations />

        <div className='getCover section container'>
          <span className='title'>We've got you covered</span>
          <ul>
            <li>
              <MdOutlineAttractions className='icon' />
              <div className='coverText'>
                <h4>Explore top attractions</h4>
                <span>
                  Experience the best of your destination with attractions,
                  tours, activities, and more
                </span>
              </div>
            </li>
            <li>
              <LuClipboardCheck className='icon' />
              <div className='coverText'>
                <h4>Fast and flexible</h4>
                <span>
                  Book tickets online in minutes, with free cancellation on many
                  attractions
                </span>
              </div>
            </li>
            <li>
              <RiCustomerService2Line className='icon' />
              <div className='coverText'>
                <h4>Support when you need it</h4>
                <span>
                  Travel's global Customer Service team is here to help 24/7
                </span>
              </div>
            </li>
          </ul>
        </div>

        <Footer />
      </div>
    </>
  )
}

export default Attraction
