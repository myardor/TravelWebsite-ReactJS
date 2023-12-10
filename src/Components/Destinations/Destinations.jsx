import React, { useEffect } from "react"
import "./Destinations.css"

import Aos from "aos"
import "aos/dist/aos.css"

const Data = [
  {
    imgUrl:
      "https://images.pexels.com/photos/290386/pexels-photo-290386.jpeg?auto=compress&cs=tinysrgb&w=600",
    location: "New York",
    locationInfo: "1184 things to do",
  },
  {
    imgUrl:
      "https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&w=600",
    location: "San Francisco",
    locationInfo: "765 things to do",
  },
  {
    imgUrl:
      "https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=600",
    location: "Tokyo",
    locationInfo: "932 things to do",
  },
  {
    imgUrl:
      "https://images.pexels.com/photos/726484/pexels-photo-726484.jpeg?auto=compress&cs=tinysrgb&w=600",
    location: "London",
    locationInfo: "645 things to do",
  },
  {
    imgUrl:
      "https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg?auto=compress&cs=tinysrgb&w=600",
    location: "Paris",
    locationInfo: "812 things to do",
  },
  {
    imgUrl:
      "https://images.pexels.com/photos/1878293/pexels-photo-1878293.jpeg?auto=compress&cs=tinysrgb&w=600",
    location: "Sydney",
    locationInfo: "589 things to do",
  },
]

const Destinations = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
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
            <li className='ContentItem'>
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
