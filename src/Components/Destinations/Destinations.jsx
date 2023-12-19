import React, { useEffect, useState } from "react"
import "./Destinations.css"

import Aos from "aos"
import "aos/dist/aos.css"
import { getAttrDataAPI } from "../../apis"

const Destinations = () => {
  const [Data, setData] = useState([])
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  useEffect(() => {
    const getAttrData = async () => {
      const res = await getAttrDataAPI()
      setData(res.data)
    }
    getAttrData()
  }, [])

  return (
    <>
      <section className='destinations section container'>
        <div className='secTitle'>
          <h3 data-aos='fade-right' className='title'>
            Nearby destinations
          </h3>
        </div>
        <div className='secContent grid'>
          {Data.map(({ imgUrl, location, locationInfo }) => (
            <li className='ContentItem' key={imgUrl}>
              <img src={imgUrl} alt='' />
              <div className='itemText'>
                <h5>{location}</h5>
                <span>{locationInfo}</span>
              </div>
            </li>
          ))}
        </div>
      </section>
    </>
  )
}

export default Destinations
