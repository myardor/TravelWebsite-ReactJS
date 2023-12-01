import React from "react"
import "./main.css"

// import images
import img1 from "../../assets/img(1).jpg"
import img2 from "../../assets/img(2).jpg"
import img3 from "../../assets/img(3).jpg"
import img4 from "../../assets/img(4).jpg"
import img5 from "../../assets/img(5).jpg"
import img6 from "../../assets/img(6).jpg"
import img7 from "../../assets/img(7).jpg"
import img8 from "../../assets/img(8).jpg"
import img9 from "../../assets/img(9).jpg"

// import icons
import { FaLocationDot } from "react-icons/fa6"
import { FaClipboard } from "react-icons/fa"

const Data = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities.",
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: "Santorini",
    location: "Greece",
    grade: "SCENIC GETAWAY",
    fees: "$850",
    description:
      "Santorini, with its iconic white-washed buildings, stunning sunsets, and crystal-clear waters, is a dream destination for those seeking beauty and tranquility.",
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "Kyoto",
    location: "Japan",
    grade: "CULTURAL ENCHANTMENT",
    fees: "$600",
    description:
      "Immerse yourself in the rich cultural heritage of Kyoto, where ancient temples, traditional tea ceremonies, and picturesque gardens await your exploration.",
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: "Patagonia",
    location: "Argentina",
    grade: "ADVENTURE ESCAPE",
    fees: "$1200",
    description:
      "For the thrill-seekers, Patagonia offers breathtaking landscapes, rugged mountains, and exciting outdoor activities, making it a paradise for adventure enthusiasts.",
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: "Istanbul",
    location: "Turkey",
    grade: "HISTORICAL DISCOVERY",
    fees: "$750",
    description:
      "Step into the crossroads of history in Istanbul, where ancient architecture, vibrant markets, and the blend of cultures create a mesmerizing experience for travelers.",
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: "Maui",
    location: "Hawaii",
    grade: "TROPICAL PARADISE",
    fees: "$900",
    description:
      "Escape to the tropical paradise of Maui, where lush landscapes, pristine beaches, and a laid-back atmosphere invite you to unwind and enjoy the beauty of nature.",
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: "Barcelona",
    location: "Spain",
    grade: "ARTISTIC RETREAT",
    fees: "$800",
    description:
      "Discover the artistic and architectural wonders of Barcelona, from the famous works of Gaudí to the vibrant street art, creating a dynamic and inspiring atmosphere.",
  },

  {
    id: 8,
    imgSrc: img8,
    destTitle: "Marrakech",
    location: "Morocco",
    grade: "EXOTIC ADVENTURE",
    fees: "$700",
    description:
      "Embark on an exotic adventure in Marrakech, where the bustling souks, stunning palaces, and the vibrant colors of the city transport you to a magical and enchanting world.",
  },

  {
    id: 9,
    imgSrc: img9,
    destTitle: "Queenstown",
    location: "New Zealand",
    grade: "THRILLING ESCAPE",
    fees: "$950",
    description:
      "For adrenaline junkies, Queenstown offers a thrilling escape with its bungee jumping, skydiving, and other adventure sports against the backdrop of stunning landscapes.",
  },
]
const Main = () => {
  return (
    <section className='main container section'>
      <div className='secTitle'>
        <h3 className='title'>Most visited destinations</h3>
      </div>
      <div className='secContent grid'>
        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} className='singleDestination'>
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
                    <FaClipboard className='icon' />
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
