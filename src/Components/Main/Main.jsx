import React, { useEffect, useState } from "react"
import "./main.css"
import axios from "axios"

import Aos from "aos"
import "aos/dist/aos.css"
import _ from "lodash"

// import icons
import { FaLocationDot } from "react-icons/fa6"
import { LuClipboardPaste } from "react-icons/lu"
import { getMainDataAPI } from "../../apis"

const showItemsCount = 6

const Main = () => {
  const [Data, setData] = useState([])
  const [currentData, setCurrentData] = useState([])
  const [currentIndex, setCurrentIndex] = useState(showItemsCount)

  useEffect(() => {
    const getData = async () => {
      const res = await getMainDataAPI()
      setData(res.data)
      setCurrentData(res.data.slice(0, showItemsCount))
    }
    getData()
  }, [])

  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  const onClickChange = () => {
    if (currentIndex === 12) {
      setCurrentIndex(0)
    } else {
      setCurrentIndex(currentIndex + showItemsCount)
    }
    setCurrentData(Data.slice(currentIndex, currentIndex + showItemsCount))
  }

  return (
    <section className='main container section'>
      <div className='secTitle'>
        <h3 data-aos='fade-right' className='title'>
          Most visited destinations
        </h3>
        <button className='btn' onClick={onClickChange}>
          CHANGE
        </button>
      </div>
      <div className='secContent grid'>
        {currentData.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} data-aos='fade-up' className='singleDestination'>
                <div className='imageDiv'>
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className='cardInfo'>
                  <h4 className='destTitle'>{destTitle}</h4>

                  <span className='continent flex'>
                    <FaLocationDot className='icon' />
                    <span className='name'>{location}</span>
                  </span>

                  {/* 花费 */}
                  <div className='fees flex'>
                    <div className='grade'>
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>
                    <div className='price'>
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  {/* 景点描述 */}
                  <div className='desc'>
                    <p>{description}</p>
                  </div>

                  {/* 了解详情 */}
                  <button className='btn flex'>
                    Details
                    <LuClipboardPaste className='icon' />
                  </button>
                </div>
              </div>
            )
          }
        )}
      </div>
    </section>
  )
}

export default Main
